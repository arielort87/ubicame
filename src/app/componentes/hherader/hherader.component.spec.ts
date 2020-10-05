import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HheraderComponent } from './hherader.component';

describe('HheraderComponent', () => {
  let component: HheraderComponent;
  let fixture: ComponentFixture<HheraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HheraderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HheraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
