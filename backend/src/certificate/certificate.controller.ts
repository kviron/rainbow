import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { CertificateService } from './certificate.service';
import { CreateCertificateDto } from './dto/create-certificate.dto';
import { UpdateCertificateDto } from './dto/update-certificate.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { UserRole } from '../auth/role.enum';
import { RolesGuard } from '../auth/roles.guard';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiExtraModels,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Certificate } from './entities/certificate.entity';
import { PaginationResponseDto } from '../common/dto/pagination-response.dto';
import { ApiPaginatedResponse } from '../utils';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('certificates')
@ApiBearerAuth()
@ApiExtraModels(PaginationResponseDto)
@ApiTags('certificates')
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @ApiOperation({ operationId: 'certificate-create' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Certificate,
  })
  create(@Body() createCertificateDto: CreateCertificateDto, @Req() req) {
    return this.certificateService.create(createCertificateDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @ApiOperation({ operationId: 'certificate-findAll' })
  @ApiPaginatedResponse(Certificate)
  findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<PaginationResponseDto<Certificate>> {
    return this.certificateService.findAll(paginationQuery);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @ApiOperation({ operationId: 'certificate-findOne' })
  findOne(@Param('id') id: string) {
    return this.certificateService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @ApiOperation({ operationId: 'certificate-update' })
  update(
    @Param('id') id: string,
    @Body() updateCertificateDto: UpdateCertificateDto,
  ) {
    return this.certificateService.update(+id, updateCertificateDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.Admin)
  @ApiOperation({ operationId: 'certificate-remove' })
  remove(@Param('id') id: string) {
    return this.certificateService.remove(+id);
  }
}
