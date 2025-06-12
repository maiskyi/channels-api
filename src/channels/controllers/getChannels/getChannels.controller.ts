import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';

import { GetChannelsRequest, GetChannelsResponse } from './getChannels.dto';

@ApiTags('Channels')
@Controller('channels')
export class GetChannelsController {
  @Get()
  @ApiOperation({
    operationId: 'getChannels',
  })
  @ApiOkResponse({
    type: GetChannelsResponse,
  })
  public async getChannels(
    @Query() { take = 25 }: GetChannelsRequest,
  ): Promise<GetChannelsResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: [], total: 0 });
        resolve({
          data: Array.from({ length: take }).map(() => ({
            id: faker.string.uuid() as unknown as bigInt.BigInteger,
            title: faker.lorem.words(3),
            userName: faker.lorem.word(),
            photo: faker.image.dataUri(),
          })),
          total: 150,
        });
      }, 2000);
    });
  }
}
