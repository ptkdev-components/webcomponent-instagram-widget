import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ptkdev-instagram-widget-wc',
  templateUrl: './ptkdev-instagram-widget-wc.component.html',
  styleUrls: ['./ptkdev-instagram-widget-wc.component.scss']
})
export class PtkdevInstagramWidgetWcComponent implements OnInit {

  fgInputs: FormGroup;

  default = {
    username: 'manufrica',
    itemsLimit: 9,
    grid: '3x3',
    imageWidth: '100%',
    imageHeight: '100%',
    borderSpacing: '2px',
    borderCorners: '5',
  };

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.fgInputs = this.fb.group({
      accountName: new FormControl(this.default.username, [Validators.required]),
      itemsLimit: new FormControl(9, [Validators.min(0), Validators.max(12)]),
      grid: new FormControl(this.default.grid),
      imageWidth: new FormControl(this.default.imageWidth),
      imageHeight: new FormControl(this.default.imageHeight),
      borderSpacing: new FormControl(this.default.borderSpacing),
      borderCorners: new FormControl(this.default.borderCorners)
    });
    this.onChangeInputs();
  }

  onChangeInputs() {
    const accountName = this.fgInputs.value.accountName;
    const itemsLimit = this.fgInputs.value.itemsLimit;
    const grid = this.fgInputs.value.grid;
    const imageWidth = this.fgInputs.value.imageWidth;
    const imageHeight = this.fgInputs.value.imageHeight;
    const borderSpacing = this.fgInputs.value.borderSpacing;
    const borderCorners = this.fgInputs.value.borderCorners;

    const widget = document.querySelector('instagram-widget');

    if (accountName) {
      widget.setAttribute('username', accountName);
    }
    if (itemsLimit) {
      widget.setAttribute('items-limit', itemsLimit);
    }
    if (grid) {
      widget.setAttribute('grid', grid);
    } else {
      widget.setAttribute('grid', null);
    }
    if (imageWidth) {
      widget.setAttribute('image-width', imageWidth);
    }
    if (imageHeight) {
      widget.setAttribute('image-height', imageHeight);
    }
    if (borderSpacing) {
      widget.setAttribute('border-spacing', borderSpacing);
    }
    if (borderCorners) {
      widget.setAttribute('border-corners', borderCorners);
    }
  }
}
