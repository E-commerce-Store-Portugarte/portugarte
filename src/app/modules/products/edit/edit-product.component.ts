import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/modules/services/config.service';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: [],
})
export class EditProductComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    stock: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
  });

  selectedFile = '';
  id: any = '';
  image: any = '';

  formToPopulate$ = new Observable();

  constructor(
    private http: ConfigService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.setIdForUrl(this.id);
    this.http.getDataFromSpecificProduct(this.id).subscribe((data) => {
      this.productForm.controls['name'].setValue(data.name);
      this.productForm.controls['description'].setValue(data.description);
      this.productForm.controls['stock'].setValue(data.stock);
      this.productForm.controls['price'].setValue(data.price);
      this.image = environment.apiUrl + data.images[0];
    });
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload() {
    const uploadData = new FormData();
    uploadData.append('name', this.productForm.get('name')?.value);
    uploadData.append(
      'description',
      this.productForm.get('description')?.value
    );
    uploadData.append('stock', this.productForm.get('stock')?.value);
    uploadData.append('price', this.productForm.get('price')?.value);
    uploadData.append('image', this.selectedFile);

    this.http.updateProducts(uploadData);

    this.router.navigate(['../navigation']);
  }
}
