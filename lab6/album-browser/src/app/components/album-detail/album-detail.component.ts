import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.component.html'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => this.album = data);
  }

  save(): void {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Title updated (simulated)');
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}