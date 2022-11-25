import { ducklingsDataUrl } from 'nfts/ducklings/constants';
import { DucklingInfo } from 'nfts/ducklings/index';
import { NftVendor } from 'nfts/index';
import { NftAssetDetail } from 'nfts/types';
import { reduceDataEntries } from 'nfts/utils';

function ducklingLevelKey(id: string) {
  return `duckling_${id}_level`;
}

export async function fetchAll(nodeUrl: string, nfts: NftAssetDetail[]) {
  if (nfts.length === 0) {
    return [];
  }

  const nftIds = nfts.map(nft => nft.assetId);

  return fetch(ducklingsDataUrl(nodeUrl), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      keys: nftIds.map(ducklingLevelKey),
    }),
  })
    .then(response =>
      response.ok
        ? response.json()
        : response.text().then(text => Promise.reject(new Error(text)))
    )
    .then(reduceDataEntries)
    .then(dataEntries =>
      nftIds.map((id): DucklingInfo => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any, radix
        const level = parseInt((dataEntries[ducklingLevelKey(id)] as any) ?? 0);
        const growthLevel = level > 0 ? level / 1e14 : 0;

        return {
          id,
          vendor: NftVendor.Ducklings,
          growthLevel,
        };
      })
    );
}
