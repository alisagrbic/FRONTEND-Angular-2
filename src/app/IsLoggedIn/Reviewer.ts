import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class Reviewer implements CanActivate {

  constructor() {}

  canActivate() {
    return localStorage.role == 'REVIEWER';
  }
}