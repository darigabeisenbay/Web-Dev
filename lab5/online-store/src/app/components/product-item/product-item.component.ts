import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  increaseLikes() {
    this.product.likes++; 
  }

  onDelete() {
  this.remove.emit(this.product.id);
}

  shareWhatsApp() {
    const text = encodeURIComponent(`Посмотри: ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareTelegram() {
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${text}`, '_blank');
  }
}