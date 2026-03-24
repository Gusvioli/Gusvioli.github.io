import os
from PIL import Image

# Configurações
TARGET_FOLDERS = ['screenshots', 'images'] # Pastas onde estão suas imagens
MAX_WIDTH = 800       # Largura máxima (ótimo para thumbnails e web mobile)
QUALITY = 75          # Qualidade da compressão (60-80 é o ideal para web)

def optimize_image(filepath):
    try:
        with Image.open(filepath) as img:
            # Verifica se precisa converter (PNGs com transparência as vezes ficam grandes)
            # Se for JPG ou PNG sem transparência, mantém.
            
            # Pega as dimensões atuais
            width, height = img.size
            
            # Se a imagem for maior que o MAX_WIDTH, redimensiona
            if width > MAX_WIDTH:
                ratio = MAX_WIDTH / float(width)
                new_height = int((float(height) * float(ratio)))
                img = img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)
                print(f"Redimensionado: {filepath} ({width}px -> {MAX_WIDTH}px)")

            # Salva a imagem otimizada (sobrescreve o arquivo original)
            # optimize=True faz uma passagem extra para achar a melhor codificação
            img.save(filepath, optimize=True, quality=QUALITY)
            print(f"[OK] Otimizado: {filepath}")
            
    except Exception as e:
        print(f"[ERRO] Não foi possível processar {filepath}: {e}")

def main():
    print("--- Iniciando Otimização de Imagens ---")
    
    for folder in TARGET_FOLDERS:
        if not os.path.exists(folder):
            print(f"Pasta '{folder}' não encontrada. Pulando...")
            continue
            
        print(f"\nProcessando pasta: {folder}")
        for filename in os.listdir(folder):
            if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
                full_path = os.path.join(folder, filename)
                optimize_image(full_path)

    print("\n--- Processo Concluído ---")

if __name__ == "__main__":
    main()