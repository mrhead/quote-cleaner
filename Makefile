EXT_NAME = quote-cleaner
SRC_FILES = content.js manifest.json
DIST_DIR = dist
ZIP_FILE = $(DIST_DIR)/$(EXT_NAME).zip

.PHONY: release clean

release: $(ZIP_FILE)

$(ZIP_FILE): $(SRC_FILES)
	mkdir -p $(DIST_DIR)
	zip -r $(ZIP_FILE) $(SRC_FILES)

clean:
	rm -rf $(DIST_DIR)
