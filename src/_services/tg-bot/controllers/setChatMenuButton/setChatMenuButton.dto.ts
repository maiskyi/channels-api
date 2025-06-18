import { ApiProperty } from '@nestjs/swagger';

export class WebAppInfo {
  @ApiProperty({
    type: String,
  })
  public readonly url: string;
}

export class MenuButtonWebApp {
  @ApiProperty({
    type: String,
  })
  public readonly type: string;

  @ApiProperty({
    type: String,
  })
  public readonly text: string;

  @ApiProperty({
    type: WebAppInfo,
  })
  public readonly web_app: WebAppInfo;
}

export class SetChatMenuButtonRequest {
  @ApiProperty({
    type: MenuButtonWebApp,
  })
  public readonly menu_button: MenuButtonWebApp;
}
