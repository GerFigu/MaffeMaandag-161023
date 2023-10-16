/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './maffe-maandag.pb';
import { GRPC_STUDENT_SERVICE_CLIENT_SETTINGS } from './maffe-maandag.pbconf';
/**
 * Service client implementation for maffe_maandag.StudentService
 */
@Injectable({ providedIn: 'any' })
export class StudentServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /maffe_maandag.StudentService/StudentsGetAll
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StudentsGetAllResponse>>
     */
    studentsGetAll: (
      requestData: thisProto.EmptyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StudentsGetAllResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/maffe_maandag.StudentService/StudentsGetAll',
        requestData,
        requestMetadata,
        requestClass: thisProto.EmptyRequest,
        responseClass: thisProto.StudentsGetAllResponse
      });
    },
    /**
     * Unary call: /maffe_maandag.StudentService/StudentGet
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StudentGetResponse>>
     */
    studentGet: (
      requestData: thisProto.StudentGetRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StudentGetResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/maffe_maandag.StudentService/StudentGet',
        requestData,
        requestMetadata,
        requestClass: thisProto.StudentGetRequest,
        responseClass: thisProto.StudentGetResponse
      });
    },
    /**
     * Unary call: /maffe_maandag.StudentService/StudentCreate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StudentSaveResponse>>
     */
    studentCreate: (
      requestData: thisProto.StudentCreateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StudentSaveResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/maffe_maandag.StudentService/StudentCreate',
        requestData,
        requestMetadata,
        requestClass: thisProto.StudentCreateRequest,
        responseClass: thisProto.StudentSaveResponse
      });
    },
    /**
     * Unary call: /maffe_maandag.StudentService/StudentUpdate
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StudentSaveResponse>>
     */
    studentUpdate: (
      requestData: thisProto.StudentUpdateRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StudentSaveResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/maffe_maandag.StudentService/StudentUpdate',
        requestData,
        requestMetadata,
        requestClass: thisProto.StudentUpdateRequest,
        responseClass: thisProto.StudentSaveResponse
      });
    },
    /**
     * Unary call: /maffe_maandag.StudentService/StudentDelete
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.EmptyResponse>>
     */
    studentDelete: (
      requestData: thisProto.StudentDeleteRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.EmptyResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/maffe_maandag.StudentService/StudentDelete',
        requestData,
        requestMetadata,
        requestClass: thisProto.StudentDeleteRequest,
        responseClass: thisProto.EmptyResponse
      });
    },
    /**
     * Unary call: /maffe_maandag.StudentService/StudentsReset
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.StudentsResetResponse>>
     */
    studentsReset: (
      requestData: thisProto.EmptyRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.StudentsResetResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/maffe_maandag.StudentService/StudentsReset',
        requestData,
        requestMetadata,
        requestClass: thisProto.EmptyRequest,
        responseClass: thisProto.StudentsResetResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_STUDENT_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'maffe_maandag.StudentService',
      settings
    );
  }

  /**
   * Unary call @/maffe_maandag.StudentService/StudentsGetAll
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StudentsGetAllResponse>
   */
  studentsGetAll(
    requestData: thisProto.EmptyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StudentsGetAllResponse> {
    return this.$raw
      .studentsGetAll(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/maffe_maandag.StudentService/StudentGet
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StudentGetResponse>
   */
  studentGet(
    requestData: thisProto.StudentGetRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StudentGetResponse> {
    return this.$raw
      .studentGet(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/maffe_maandag.StudentService/StudentCreate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StudentSaveResponse>
   */
  studentCreate(
    requestData: thisProto.StudentCreateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StudentSaveResponse> {
    return this.$raw
      .studentCreate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/maffe_maandag.StudentService/StudentUpdate
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StudentSaveResponse>
   */
  studentUpdate(
    requestData: thisProto.StudentUpdateRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StudentSaveResponse> {
    return this.$raw
      .studentUpdate(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/maffe_maandag.StudentService/StudentDelete
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.EmptyResponse>
   */
  studentDelete(
    requestData: thisProto.StudentDeleteRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.EmptyResponse> {
    return this.$raw
      .studentDelete(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/maffe_maandag.StudentService/StudentsReset
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.StudentsResetResponse>
   */
  studentsReset(
    requestData: thisProto.EmptyRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.StudentsResetResponse> {
    return this.$raw
      .studentsReset(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
