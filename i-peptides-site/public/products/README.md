# Инструкция по добавлению изображений продуктов

## Сохраните изображения на Mac и скопируйте их в проект:

Вы отправили 5 изображений продуктов I-PEPTIDES. Сохраните их на вашем Mac и скопируйте с такими названиями:

### 1. Тирзолайт 5mg (изображение с двумя флаконами 5 mg + 10 mg)
```bash
cp "/путь/к/изображению/тирзолайт-5mg-10mg.jpg" ~/i-peptides/i-peptides-site/public/products/tirzepatide-5mg.jpg
```

### 2. Тирзолайт 10mg (изображение с двумя флаконами 10 mg + 10 mg)
```bash
cp "/путь/к/изображению/тирзолайт-10mg.jpg" ~/i-peptides/i-peptides-site/public/products/tirzepatide-10mg.jpg
```

### 3. Реталайт (изображение с двумя флаконами 5 mg + 10 mg)
```bash
cp "/путь/к/изображению/реталайт.jpg" ~/i-peptides/i-peptides-site/public/products/retatrutide-5mg.jpg
```

### 4. BPC-157 (изображение с двумя флаконами 10MG + 5 MG)
```bash
cp "/путь/к/изображению/bpc-157.jpg" ~/i-peptides/i-peptides-site/public/products/bpc157-10mg.jpg
```

### 5. Thymosin Alpha 1 (изображение с двумя флаконами 10 mg)
```bash
cp "/путь/к/изображению/thymosin.jpg" ~/i-peptides/i-peptides-site/public/products/thymosin-alpha1-10mg.jpg
```

## После копирования:

1. Проверьте, что файлы на месте:
```bash
ls -lh ~/i-peptides/i-peptides-site/public/products/
```

2. Добавьте в git:
```bash
cd ~/i-peptides
git add i-peptides-site/public/products/
git commit -m "Добавить изображения продуктов I-PEPTIDES"
git push
```

3. Сообщите мне, что файлы загружены, и я обновлю данные товаров в lib/data.ts
