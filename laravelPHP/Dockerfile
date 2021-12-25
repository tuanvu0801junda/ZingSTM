FROM php:8.0

RUN apt-get update -y && apt-get install -y openssl zip unzip git
RUN apt-get install libonig-dev
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo pdo_mysql mbstring

WORKDIR /app/backend
COPY . .
RUN composer install
RUN php artisan key:generate

EXPOSE 8000
CMD php artisan serve --host=0.0.0.0


