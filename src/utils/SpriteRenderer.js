export class SpriteRenderer {
  constructor(ctx, atlas) {
    this.ctx = ctx;
    this.atlas = atlas;
  }

  drawSprite(name, x, y, options = {}) {
    const sprite = this.atlas.getSprite(name);
    if (!sprite) return;

    const {
      scale = 1,
      rotation = 0,
      alpha = 1,
      anchorX = 0.5,
      anchorY = 0.5
    } = options;

    this.ctx.save();
    this.ctx.globalAlpha = alpha;
    // 旋转时会触发双线性插值，把深色描边和透明边缘混合成“黑边”，故旋转时关闭平滑。
    this.ctx.imageSmoothingEnabled = rotation === 0;
    this.ctx.translate(x, y);
    this.ctx.rotate(rotation);
    this.ctx.scale(scale, scale);

    this.ctx.drawImage(
      sprite.image,
      sprite.x,
      sprite.y,
      sprite.width,
      sprite.height,
      -sprite.width * anchorX,
      -sprite.height * anchorY,
      sprite.width,
      sprite.height
    );

    this.ctx.restore();
  }

  getSpriteSize(name) {
    const sprite = this.atlas.getSprite(name);
    return sprite ? { width: sprite.width, height: sprite.height } : { width: 0, height: 0 };
  }
}
