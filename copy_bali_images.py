import shutil
import os

files = {
    r"bali_hero_vibe_1773467735911.png": "bali_hero.png",
    r"bali_about_temple_1773467752947.png": "bali_about.png",
    r"bali_activity_swing_card_1773467770078.png": "bali_swing.png",
    r"bali_place_kelingking_card_1773467788320.png": "bali_kelingking.png",
    r"bali_cta_landscape_1773467803352.png": "bali_cta.png",
    r"bali_activity_scuba_card_1773467918346.png": "bali_scuba.png",
    r"bali_activity_rafting_card_1773467938666.png": "bali_rafting.png",
    r"bali_activity_atv_card_1773467953556.png": "bali_atv.png",
    r"bali_place_handara_card_1773467970561.png": "bali_handara.png",
    r"bali_place_ulun_danu_card_1773467986249.png": "bali_ulun_danu.png",
    r"bali_activity_snorkeling_card_1773468069687.png": "bali_snorkeling.png",
    r"bali_place_seminyak_card_1773468084521.png": "bali_seminyak.png",
    r"bali_place_diamond_card_1773468099102.png": "bali_diamond.png",
    r"bali_place_uluwatu_card_1773468115798.png": "bali_uluwatu.png"
}

source_dir = r"C:\Users\iamas\.gemini\antigravity\brain\c3a77b23-ab22-46ab-b475-5b7f77bea1b7"
dest_dir = r"d:\lets travelz\public"

for src, dest in files.items():
    src_path = os.path.join(source_dir, src)
    dest_path = os.path.join(dest_dir, dest)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src} to {dest}")
    else:
        print(f"Source NOT FOUND: {src_path}")
