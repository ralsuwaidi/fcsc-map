import pandas as pd
import geopandas as gpd

# read the Excel data
data = pd.read_excel('data.xlsx')  # replace with your filename

# create a geodataframe
gdf = gpd.GeoDataFrame(
    data, geometry=gpd.points_from_xy(data.Longitude, data.Latitude))

# save the geodataframe as GeoJSON
gdf.to_file("output.geojson", driver='GeoJSON')