
namespace Private {
    export const preloads: {[path: string]: HTMLImageElement} = {};
}

export class Images {
    public static preload(paths: string[]) {
        return Promise.all(paths.map(path => {
            return new Promise<HTMLImageElement>(resolve => {
                const image = new Image();
                image.src = path;
                image.onload = () => {
                    setTimeout(() => {
                        // tslint:disable-next-line
                        console.assert(image.complete);
                        resolve(image);
                    }, 10);
                };
                image.onerror = () => resolve(image);
            })
            .then(image => {
                Private.preloads[path] = image;
            });
        }));
    }

    public static get(path: string) {
        return Private.preloads[path];
    }
}
