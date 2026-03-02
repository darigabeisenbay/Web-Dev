import { Component, OnInit } from '@angular/core';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
@Component({
  standalone: true, 
  imports: [CommonModule, RouterModule],
  selector: 'app-albums',
  templateUrl: './albums.component.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loaded: boolean = false;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation(); // Чтобы не срабатывал переход по клику на карточку
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}