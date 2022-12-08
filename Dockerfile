FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /app

ENV ASPNETCORE_URLS=http://+:8010

EXPOSE 8010

# Copy csproj and restore as distinct layers
COPY ./Blog.sln .
COPY ./Blog/Blog.csproj ./Blog/
RUN dotnet restore

# Copy everything else and build
COPY Blog/. ./Blog/
workdir /app/Blog
RUN dotnet publish --no-restore -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
FROM base AS final
WORKDIR /app
COPY --from=build /app/Blog/out ./
ENTRYPOINT ["dotnet", "Blog.dll"]