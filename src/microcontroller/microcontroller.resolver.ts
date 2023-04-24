import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MicrocontrollerResolver {
    @Query(() => String)

    helloWorld(): string {
        return 'hola';
    }

}


