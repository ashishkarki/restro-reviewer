import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Location {
  @Field()
  streetNumber: string;

  @Field()
  streetName: string;

  @Field({ nullable: true })
  aptUnit?: string;

  @Field()
  city: string;

  @Field()
  stateProvince: string;

  @Field()
  country: string;

  @Field()
  zipPostalCode: string;
}
