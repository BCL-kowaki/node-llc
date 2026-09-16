"""既存のデモ画面を共通デバイスフレームへ合成する。"""

from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
MOCKUP_DIR = ROOT / "public/services/web-production/mockups"
FRAME_PATH = MOCKUP_DIR / "device/frame-transparent.png"

# 既存画像内にある、デスクトップ・モバイル表示の領域。
SOURCE_DESKTOP = (448, 78, 1452, 707)
SOURCE_MOBILE = (104, 637, 412, 1200)

# 共通フレーム内の画面領域。画像生成後に実測した固定値。
TARGET_DESKTOP = (369, 216, 1209, 756)
TARGET_MOBILE = (129, 305, 391, 877)


def rounded_screen(image: Image.Image, size: tuple[int, int], radius: int) -> Image.Image:
    """画像を指定サイズへ合わせ、角丸マスクを適用する。"""
    fitted = image.resize(size, Image.Resampling.LANCZOS).convert("RGBA")
    mask = Image.new("L", size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    fitted.putalpha(mask)
    return fitted


def cover_crop(image: Image.Image, target: tuple[int, int]) -> Image.Image:
    """目標の縦横比に合わせ、上端を優先して中央寄せで切り出す(ファーストビュー上部を残す)。"""
    src_w, src_h = image.size
    target_ratio = target[0] / target[1]
    if src_w / src_h > target_ratio:
        new_w = round(src_h * target_ratio)
        left = (src_w - new_w) // 2
        return image.crop((left, 0, left + new_w, src_h))
    new_h = round(src_w / target_ratio)
    return image.crop((0, 0, src_w, new_h))


def compose_from_screens(name: str, desktop_path: Path, mobile_path: Path) -> None:
    """デスクトップ・モバイルの生スクリーンショット2枚から共通フレームへ合成する。"""
    frame = Image.open(FRAME_PATH).convert("RGBA")
    result = frame.copy()

    desktop_size = (TARGET_DESKTOP[2] - TARGET_DESKTOP[0], TARGET_DESKTOP[3] - TARGET_DESKTOP[1])
    mobile_size = (TARGET_MOBILE[2] - TARGET_MOBILE[0], TARGET_MOBILE[3] - TARGET_MOBILE[1])
    desktop = rounded_screen(cover_crop(Image.open(desktop_path).convert("RGBA"), desktop_size), desktop_size, radius=5)
    mobile = rounded_screen(cover_crop(Image.open(mobile_path).convert("RGBA"), mobile_size), mobile_size, radius=31)

    result.alpha_composite(desktop, (TARGET_DESKTOP[0], TARGET_DESKTOP[1]))
    result.alpha_composite(mobile, (TARGET_MOBILE[0], TARGET_MOBILE[1]))
    phone_top = frame.crop((TARGET_MOBILE[0], TARGET_MOBILE[1], TARGET_MOBILE[2], TARGET_MOBILE[1] + 38))
    phone_bottom = frame.crop((TARGET_MOBILE[0], TARGET_MOBILE[3] - 35, TARGET_MOBILE[2], TARGET_MOBILE[3]))
    result.alpha_composite(phone_top, (TARGET_MOBILE[0], TARGET_MOBILE[1]))
    result.alpha_composite(phone_bottom, (TARGET_MOBILE[0], TARGET_MOBILE[3] - 35))
    result.save(MOCKUP_DIR / f"{name}-device.png", optimize=True)


def compose(name: str) -> None:
    source_path = MOCKUP_DIR / f"{name}.png"
    source = Image.open(source_path).convert("RGBA")
    frame = Image.open(FRAME_PATH).convert("RGBA")
    result = frame.copy()

    desktop_size = (TARGET_DESKTOP[2] - TARGET_DESKTOP[0], TARGET_DESKTOP[3] - TARGET_DESKTOP[1])
    mobile_size = (TARGET_MOBILE[2] - TARGET_MOBILE[0], TARGET_MOBILE[3] - TARGET_MOBILE[1])
    desktop = rounded_screen(source.crop(SOURCE_DESKTOP), desktop_size, radius=5)
    mobile = rounded_screen(source.crop(SOURCE_MOBILE), mobile_size, radius=31)

    result.alpha_composite(desktop, (TARGET_DESKTOP[0], TARGET_DESKTOP[1]))
    result.alpha_composite(mobile, (TARGET_MOBILE[0], TARGET_MOBILE[1]))
    # 画面より手前にあるスマートフォンのステータス領域とホームバーを戻す。
    # ノッチや操作バーがスクリーンショットで隠れず、実機らしい見え方になる。
    phone_top = frame.crop((TARGET_MOBILE[0], TARGET_MOBILE[1], TARGET_MOBILE[2], TARGET_MOBILE[1] + 38))
    phone_bottom = frame.crop((TARGET_MOBILE[0], TARGET_MOBILE[3] - 35, TARGET_MOBILE[2], TARGET_MOBILE[3]))
    result.alpha_composite(phone_top, (TARGET_MOBILE[0], TARGET_MOBILE[1]))
    result.alpha_composite(phone_bottom, (TARGET_MOBILE[0], TARGET_MOBILE[3] - 35))
    result.save(MOCKUP_DIR / f"{name}-device.png", optimize=True)


if __name__ == "__main__":
    import sys

    # 使い方:
    #   python3 scripts/compose-demo-mockups.py                # 旧合成画像(cafe等)から再合成
    #   python3 scripts/compose-demo-mockups.py NAME DESK MOB  # 生スクショ2枚から合成
    if len(sys.argv) == 4:
        compose_from_screens(sys.argv[1], Path(sys.argv[2]), Path(sys.argv[3]))
    else:
        for demo_name in ("cafe", "sweets", "portfolio"):
            compose(demo_name)
