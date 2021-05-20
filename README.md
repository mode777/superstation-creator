# SstMaker

## Data Model

```mermaid
erDiagram
    IMAGE ||..o{ TILESET : uses
    TILESET ||--o{ TILEMAP : uses
    TILEMAP ||--o{ LAYER : uses
    LAYER }o--|| BACKGROUND : uses
    SCENE ||..|| BACKGROUND : uses
    IMAGE ||--o{ FRAME : uses
    FRAME ||--o{ ANIMATION : uses
    ANIMATION ||--|| SPRITE : uses
```