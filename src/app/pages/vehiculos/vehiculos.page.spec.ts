import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculosPage } from './vehiculos.page';

describe('VehiculosPage', () => {
  let component: VehiculosPage;
  let fixture: ComponentFixture<VehiculosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
