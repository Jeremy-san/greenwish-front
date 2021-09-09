import { Component, OnInit } from '@angular/core';
import { Sheet } from 'src/app/model/sheet';
import { Router } from '@angular/router';
import { SheetService } from 'src/app/services/sheet.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {


  sheets: Sheet[] = null;

  constructor(private router: Router, private sheetService: SheetService) { }

  ngOnInit(): void {
    this.sheetService.getSheets()
    .subscribe(sheets => this.sheets = sheets);
  }

  selectSheet(sheet: Sheet) {
    const link = ['sheet', sheet.id ];
    this.router.navigate(link)
  }
}
