import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmsOtpService } from './sms-otp.service';
import { CreateSmsOtpDto } from './dto/create-sms-otp.dto';
import { UpdateSmsOtpDto } from './dto/update-sms-otp.dto';

@Controller('sms-otp')
export class SmsOtpController {
  constructor(private readonly smsOtpService: SmsOtpService) {}

  @Post()
  create(@Body() createSmsOtpDto: CreateSmsOtpDto) {
    return this.smsOtpService.create(createSmsOtpDto);
  }

  @Get()
  findAll() {
    return this.smsOtpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smsOtpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmsOtpDto: UpdateSmsOtpDto) {
    return this.smsOtpService.update(+id, updateSmsOtpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smsOtpService.remove(+id);
  }
}
