import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigService } from 'src/app/modules/services/config.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: [],
})
export class AddProductsComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    stock: new FormControl(),
    price: new FormControl(),
    image: new FormControl(),
  });

  selectedFile = '';

  constructor(private http: ConfigService) {}

  ngOnInit(): void {}

  submit() {
    this.http.submitProduct(this.productForm.getRawValue());
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

    this.http.uploadImage(uploadData);
    console.log(uploadData);
  }
}
