/**
 * My Title
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Character } from './character';
import { Coordinates } from './coordinates';
import { ExitDirections } from './exitDirections';
import { Item } from './item';
import { Player } from './player';
import { RoomObject } from './roomObject';
import { RoomType } from './roomType';


export interface Room { 
    id: number;
    areaId: number;
    title?: string;
    description?: string;
    exits?: ExitDirections;
    coords?: Coordinates;
    players?: Array<Player>;
    mobs?: Array<Character>;
    items?: Array<Item>;
    type?: RoomType;
    emotes?: Array<string>;
    roomObjects?: Array<RoomObject>;
    clean?: boolean;
    updateMessage?: string;
    instantRePop: boolean;
    dateCreated: Date;
    dateUpdated: Date;
}