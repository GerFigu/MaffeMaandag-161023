/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for maffe_maandag.EmptyRequest
 */
export class EmptyRequest implements GrpcMessage {
  static id = 'maffe_maandag.EmptyRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EmptyRequest();
    EmptyRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EmptyRequest) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EmptyRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    EmptyRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EmptyRequest,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EmptyRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<EmptyRequest.AsObject>) {
    _value = _value || {};
    EmptyRequest.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EmptyRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EmptyRequest.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): EmptyRequest.AsProtobufJSON {
    return {};
  }
}
export module EmptyRequest {
  /**
   * Standard JavaScript object representation for EmptyRequest
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for EmptyRequest
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for maffe_maandag.StudentsGetAllResponse
 */
export class StudentsGetAllResponse implements GrpcMessage {
  static id = 'maffe_maandag.StudentsGetAllResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StudentsGetAllResponse();
    StudentsGetAllResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StudentsGetAllResponse) {
    _instance.students = _instance.students || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StudentsGetAllResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Student();
          _reader.readMessage(
            messageInitializer1,
            Student.deserializeBinaryFromReader
          );
          (_instance.students = _instance.students || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StudentsGetAllResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StudentsGetAllResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.students && _instance.students.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.students as any,
        Student.serializeBinaryToWriter
      );
    }
  }

  private _students?: Student[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StudentsGetAllResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StudentsGetAllResponse.AsObject>) {
    _value = _value || {};
    this.students = (_value.students || []).map(m => new Student(m));
    StudentsGetAllResponse.refineValues(this);
  }
  get students(): Student[] | undefined {
    return this._students;
  }
  set students(value: Student[] | undefined) {
    this._students = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StudentsGetAllResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StudentsGetAllResponse.AsObject {
    return {
      students: (this.students || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StudentsGetAllResponse.AsProtobufJSON {
    return {
      students: (this.students || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module StudentsGetAllResponse {
  /**
   * Standard JavaScript object representation for StudentsGetAllResponse
   */
  export interface AsObject {
    students?: Student.AsObject[];
  }

  /**
   * Protobuf JSON representation for StudentsGetAllResponse
   */
  export interface AsProtobufJSON {
    students: Student.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for maffe_maandag.StudentGetRequest
 */
export class StudentGetRequest implements GrpcMessage {
  static id = 'maffe_maandag.StudentGetRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StudentGetRequest();
    StudentGetRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StudentGetRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StudentGetRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    StudentGetRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StudentGetRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StudentGetRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StudentGetRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    StudentGetRequest.refineValues(this);
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StudentGetRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StudentGetRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StudentGetRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module StudentGetRequest {
  /**
   * Standard JavaScript object representation for StudentGetRequest
   */
  export interface AsObject {
    id: number;
  }

  /**
   * Protobuf JSON representation for StudentGetRequest
   */
  export interface AsProtobufJSON {
    id: number;
  }
}

/**
 * Message implementation for maffe_maandag.StudentGetResponse
 */
export class StudentGetResponse implements GrpcMessage {
  static id = 'maffe_maandag.StudentGetResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StudentGetResponse();
    StudentGetResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StudentGetResponse) {
    _instance.student = _instance.student || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StudentGetResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.student = new Student();
          _reader.readMessage(
            _instance.student,
            Student.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StudentGetResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StudentGetResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.student) {
      _writer.writeMessage(
        1,
        _instance.student as any,
        Student.serializeBinaryToWriter
      );
    }
  }

  private _student?: Student;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StudentGetResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StudentGetResponse.AsObject>) {
    _value = _value || {};
    this.student = _value.student ? new Student(_value.student) : undefined;
    StudentGetResponse.refineValues(this);
  }
  get student(): Student | undefined {
    return this._student;
  }
  set student(value: Student | undefined) {
    this._student = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StudentGetResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StudentGetResponse.AsObject {
    return {
      student: this.student ? this.student.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StudentGetResponse.AsProtobufJSON {
    return {
      student: this.student ? this.student.toProtobufJSON(options) : null
    };
  }
}
export module StudentGetResponse {
  /**
   * Standard JavaScript object representation for StudentGetResponse
   */
  export interface AsObject {
    student?: Student.AsObject;
  }

  /**
   * Protobuf JSON representation for StudentGetResponse
   */
  export interface AsProtobufJSON {
    student: Student.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for maffe_maandag.StudentCreateRequest
 */
export class StudentCreateRequest implements GrpcMessage {
  static id = 'maffe_maandag.StudentCreateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StudentCreateRequest();
    StudentCreateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StudentCreateRequest) {
    _instance.student = _instance.student || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StudentCreateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.student = new Student();
          _reader.readMessage(
            _instance.student,
            Student.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StudentCreateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StudentCreateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.student) {
      _writer.writeMessage(
        1,
        _instance.student as any,
        Student.serializeBinaryToWriter
      );
    }
  }

  private _student?: Student;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StudentCreateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StudentCreateRequest.AsObject>) {
    _value = _value || {};
    this.student = _value.student ? new Student(_value.student) : undefined;
    StudentCreateRequest.refineValues(this);
  }
  get student(): Student | undefined {
    return this._student;
  }
  set student(value: Student | undefined) {
    this._student = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StudentCreateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StudentCreateRequest.AsObject {
    return {
      student: this.student ? this.student.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StudentCreateRequest.AsProtobufJSON {
    return {
      student: this.student ? this.student.toProtobufJSON(options) : null
    };
  }
}
export module StudentCreateRequest {
  /**
   * Standard JavaScript object representation for StudentCreateRequest
   */
  export interface AsObject {
    student?: Student.AsObject;
  }

  /**
   * Protobuf JSON representation for StudentCreateRequest
   */
  export interface AsProtobufJSON {
    student: Student.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for maffe_maandag.StudentUpdateRequest
 */
export class StudentUpdateRequest implements GrpcMessage {
  static id = 'maffe_maandag.StudentUpdateRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StudentUpdateRequest();
    StudentUpdateRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StudentUpdateRequest) {
    _instance.student = _instance.student || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StudentUpdateRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.student = new Student();
          _reader.readMessage(
            _instance.student,
            Student.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StudentUpdateRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StudentUpdateRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.student) {
      _writer.writeMessage(
        1,
        _instance.student as any,
        Student.serializeBinaryToWriter
      );
    }
  }

  private _student?: Student;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StudentUpdateRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StudentUpdateRequest.AsObject>) {
    _value = _value || {};
    this.student = _value.student ? new Student(_value.student) : undefined;
    StudentUpdateRequest.refineValues(this);
  }
  get student(): Student | undefined {
    return this._student;
  }
  set student(value: Student | undefined) {
    this._student = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StudentUpdateRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StudentUpdateRequest.AsObject {
    return {
      student: this.student ? this.student.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StudentUpdateRequest.AsProtobufJSON {
    return {
      student: this.student ? this.student.toProtobufJSON(options) : null
    };
  }
}
export module StudentUpdateRequest {
  /**
   * Standard JavaScript object representation for StudentUpdateRequest
   */
  export interface AsObject {
    student?: Student.AsObject;
  }

  /**
   * Protobuf JSON representation for StudentUpdateRequest
   */
  export interface AsProtobufJSON {
    student: Student.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for maffe_maandag.StudentSaveResponse
 */
export class StudentSaveResponse implements GrpcMessage {
  static id = 'maffe_maandag.StudentSaveResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StudentSaveResponse();
    StudentSaveResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StudentSaveResponse) {
    _instance.fullName = _instance.fullName || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StudentSaveResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.fullName = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    StudentSaveResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StudentSaveResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.fullName) {
      _writer.writeString(1, _instance.fullName);
    }
  }

  private _fullName: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StudentSaveResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StudentSaveResponse.AsObject>) {
    _value = _value || {};
    this.fullName = _value.fullName;
    StudentSaveResponse.refineValues(this);
  }
  get fullName(): string {
    return this._fullName;
  }
  set fullName(value: string) {
    this._fullName = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StudentSaveResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StudentSaveResponse.AsObject {
    return {
      fullName: this.fullName
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StudentSaveResponse.AsProtobufJSON {
    return {
      fullName: this.fullName
    };
  }
}
export module StudentSaveResponse {
  /**
   * Standard JavaScript object representation for StudentSaveResponse
   */
  export interface AsObject {
    fullName: string;
  }

  /**
   * Protobuf JSON representation for StudentSaveResponse
   */
  export interface AsProtobufJSON {
    fullName: string;
  }
}

/**
 * Message implementation for maffe_maandag.StudentDeleteRequest
 */
export class StudentDeleteRequest implements GrpcMessage {
  static id = 'maffe_maandag.StudentDeleteRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StudentDeleteRequest();
    StudentDeleteRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StudentDeleteRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StudentDeleteRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    StudentDeleteRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StudentDeleteRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StudentDeleteRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<StudentDeleteRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    StudentDeleteRequest.refineValues(this);
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StudentDeleteRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StudentDeleteRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StudentDeleteRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module StudentDeleteRequest {
  /**
   * Standard JavaScript object representation for StudentDeleteRequest
   */
  export interface AsObject {
    id: number;
  }

  /**
   * Protobuf JSON representation for StudentDeleteRequest
   */
  export interface AsProtobufJSON {
    id: number;
  }
}

/**
 * Message implementation for maffe_maandag.StudentsResetResponse
 */
export class StudentsResetResponse implements GrpcMessage {
  static id = 'maffe_maandag.StudentsResetResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new StudentsResetResponse();
    StudentsResetResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: StudentsResetResponse) {
    _instance.students = _instance.students || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: StudentsResetResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Student();
          _reader.readMessage(
            messageInitializer1,
            Student.deserializeBinaryFromReader
          );
          (_instance.students = _instance.students || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    StudentsResetResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: StudentsResetResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.students && _instance.students.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.students as any,
        Student.serializeBinaryToWriter
      );
    }
  }

  private _students?: Student[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of StudentsResetResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<StudentsResetResponse.AsObject>) {
    _value = _value || {};
    this.students = (_value.students || []).map(m => new Student(m));
    StudentsResetResponse.refineValues(this);
  }
  get students(): Student[] | undefined {
    return this._students;
  }
  set students(value: Student[] | undefined) {
    this._students = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    StudentsResetResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): StudentsResetResponse.AsObject {
    return {
      students: (this.students || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): StudentsResetResponse.AsProtobufJSON {
    return {
      students: (this.students || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module StudentsResetResponse {
  /**
   * Standard JavaScript object representation for StudentsResetResponse
   */
  export interface AsObject {
    students?: Student.AsObject[];
  }

  /**
   * Protobuf JSON representation for StudentsResetResponse
   */
  export interface AsProtobufJSON {
    students: Student.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for maffe_maandag.EmptyResponse
 */
export class EmptyResponse implements GrpcMessage {
  static id = 'maffe_maandag.EmptyResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new EmptyResponse();
    EmptyResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: EmptyResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: EmptyResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    EmptyResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: EmptyResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EmptyResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<EmptyResponse.AsObject>) {
    _value = _value || {};
    EmptyResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    EmptyResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): EmptyResponse.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): EmptyResponse.AsProtobufJSON {
    return {};
  }
}
export module EmptyResponse {
  /**
   * Standard JavaScript object representation for EmptyResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for EmptyResponse
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for maffe_maandag.Student
 */
export class Student implements GrpcMessage {
  static id = 'maffe_maandag.Student';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Student();
    Student.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Student) {
    _instance.id = _instance.id || 0;
    _instance.firstName = _instance.firstName || '';
    _instance.lastName = _instance.lastName || '';
    _instance.age = _instance.age || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Student,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.firstName = _reader.readString();
          break;
        case 3:
          _instance.lastName = _reader.readString();
          break;
        case 4:
          _instance.age = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    Student.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Student, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.firstName) {
      _writer.writeString(2, _instance.firstName);
    }
    if (_instance.lastName) {
      _writer.writeString(3, _instance.lastName);
    }
    if (_instance.age) {
      _writer.writeInt32(4, _instance.age);
    }
  }

  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _age: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Student to deeply clone from
   */
  constructor(_value?: RecursivePartial<Student.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.firstName = _value.firstName;
    this.lastName = _value.lastName;
    this.age = _value.age;
    Student.refineValues(this);
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  get firstName(): string {
    return this._firstName;
  }
  set firstName(value: string) {
    this._firstName = value;
  }
  get lastName(): string {
    return this._lastName;
  }
  set lastName(value: string) {
    this._lastName = value;
  }
  get age(): number {
    return this._age;
  }
  set age(value: number) {
    this._age = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Student.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Student.AsObject {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Student.AsProtobufJSON {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age
    };
  }
}
export module Student {
  /**
   * Standard JavaScript object representation for Student
   */
  export interface AsObject {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
  }

  /**
   * Protobuf JSON representation for Student
   */
  export interface AsProtobufJSON {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
  }
}
