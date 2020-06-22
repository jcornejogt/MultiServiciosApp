import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupProfessionalPage } from './signup-professional.page';

describe('SignupProfessionalPage', () => {
  let component: SignupProfessionalPage;
  let fixture: ComponentFixture<SignupProfessionalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupProfessionalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupProfessionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
