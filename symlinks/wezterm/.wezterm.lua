local wezterm = require('wezterm')
local config = {}

if wezterm.config_builder then
  config = wezterm.config_builder()
end

config.enable_tab_bar = false

config.window_padding = {
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
}

config.initial_rows = 48
config.initial_cols = 160

config.font = wezterm.font_with_fallback({
  { family = 'Intel One Mono' },
  { family = 'HackGen Console NF' },
  { family = 'HackGen Console NF', assume_emoji_presentation = true },
})
config.font_size = 11

config.color_scheme = 'Everblush'

return config
