
import { BrazilGabrielPlateData } from "../../data/brazil/BrazilGrabrielPlateData";
import { PlateDataCanada } from "../../data/canada/PlateDataCanada";
import { Region, Character, BrazilCharacters, IndonesiaCharacters, CanadaCharacters, NordicCharacters } from "../../Types";
import { BrazilSandraPlateData } from "../../data/brazil/BrazilSandraPlateData";
import { IndonesiaWulandariPlateData } from "../../data/indonesia/IndonesiaWulandariPlateData";
import { IndonesiaHassanPlateData } from "../../data/indonesia/IndonesiaHassanPlateData";
import { IndonesiaNisaPlateData } from "../../data/indonesia/IndonesiaNisaPlateData";
import { CanadaHardeepPlateData } from "../../data/canada/CanadaHardeepPlateData";
import { BrazilMariaPlateData } from "../../data/brazil/BrazilMariaPlateData";
import { CanadaEstherPlateData } from "../../data/canada/CanadaEstherPlateData";
import { NordicsEliasPlateData } from "../../data/nordics/NordicsEliasPlateData";
import { NordicsAmenaPlateData } from "../../data/nordics/NordicsAmenaPlateData";
import { NordicsLisenPlateData } from "../../data/nordics/NordicsLisenPlateData";

export class PlateUtils {
    public static getData(region: Region, character: Character) {
        switch (region) {
            case Region.Canada:
                switch (character) {
                    case CanadaCharacters.Hardeep: return CanadaHardeepPlateData;
                    case CanadaCharacters.Esther: return CanadaEstherPlateData;
                    default: return PlateDataCanada;
                }
            case Region.Brazil:
                switch (character) {
                    case BrazilCharacters.Gabriel: return BrazilGabrielPlateData;
                    case BrazilCharacters.Sandra: return BrazilSandraPlateData;
                    default: return BrazilMariaPlateData;
                }
            case Region.Indonesia:
                switch (character) {
                    case IndonesiaCharacters.Hassan: return IndonesiaHassanPlateData;
                    case IndonesiaCharacters.Neesa: return IndonesiaNisaPlateData;
                    default: return IndonesiaWulandariPlateData;
                }
            case Region.Nordics:
                switch (character) {
                    case NordicCharacters.Elias: return NordicsEliasPlateData;
                    case NordicCharacters.Amena: return NordicsAmenaPlateData;
                    default: return NordicsLisenPlateData;
                }
        }
    }
}
