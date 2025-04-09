import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  rating: number;
}

export class UpdateProductDto extends CreateProductDto {}

export class ProductFilterDto {
  @IsString()
  category?: string;

  @IsNumber()
  @Min(0)
  minPrice?: number;

  @IsNumber()
  @Min(0)
  maxPrice?: number;

  @IsNumber()
  @Min(0)
  @Max(5)
  minRating?: number;

  @IsString()
  search?: string;
}