import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TypeOfLoginPage } from './type-of-login.page';

describe('TypeOfLoginPage', () => {
  let component: TypeOfLoginPage;
  let fixture: ComponentFixture<TypeOfLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TypeOfLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
