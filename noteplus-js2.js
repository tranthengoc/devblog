$(function() {
    $('#main-menu')['each'](function() {
        var _0x316ax2 = $(this)['find']('.LinkList ul > li')['children']('a'),
            _0x316ax3 = _0x316ax2['length'];
        for (var _0x316ax4 = 0; _0x316ax4 < _0x316ax3; _0x316ax4++) {
            var _0x316ax5 = _0x316ax2['eq'](_0x316ax4),
                _0x316ax6 = _0x316ax5['text']();
            if (_0x316ax6['charAt'](0) !== '_') {
                var _0x316ax7 = _0x316ax2['eq'](_0x316ax4 + 1),
                    _0x316ax8 = _0x316ax7['text']();
                if (_0x316ax8['charAt'](0) === '_') {
                    var _0x316ax9 = _0x316ax5['parent']();
                    _0x316ax9['append']('<ul class="sub-menu m-sub"/>')
                }
            };
            if (_0x316ax6['charAt'](0) === '_') {
                _0x316ax5['text'](_0x316ax6['replace']('_', ''));
                _0x316ax5['parent']()['appendTo'](_0x316ax9['children']('.sub-menu'))
            }
        };
        for (var _0x316ax4 = 0; _0x316ax4 < _0x316ax3; _0x316ax4++) {
            var _0x316axa = _0x316ax2['eq'](_0x316ax4),
                _0x316axb = _0x316axa['text']();
            if (_0x316axb['charAt'](0) !== '_') {
                var _0x316axc = _0x316ax2['eq'](_0x316ax4 + 1),
                    _0x316axd = _0x316axc['text']();
                if (_0x316axd['charAt'](0) === '_') {
                    var _0x316axe = _0x316axa['parent']();
                    _0x316axe['append']('<ul class="sub-menu2 m-sub"/>')
                }
            };
            if (_0x316axb['charAt'](0) === '_') {
                _0x316axa['text'](_0x316axb['replace']('_', ''));
                _0x316axa['parent']()['appendTo'](_0x316axe['children']('.sub-menu2'))
            }
        };
        $('#main-menu ul li ul')['parent']('li')['addClass']('has-sub');
        $('#main-menu .widget')['addClass']('show-menu')
    });
    $('#main-menu-nav')['clone']()['appendTo']('.mobile-menu');
    $('.mobile-menu .has-sub')['append']('<div class="submenu-toggle"/>');
    $('.mobile-menu-toggle')['on']('click', function() {
        $('body')['toggleClass']('nav-active');
        $('.overlay')['fadeToggle'](170)
    });
    $('.mobile-menu ul li .submenu-toggle')['on']('click', function(_0x316axf) {
        if ($(this)['parent']()['hasClass']('has-sub')) {
            _0x316axf['preventDefault']();
            if (!$(this)['parent']()['hasClass']('show')) {
                $(this)['parent']()['addClass']('show')['children']('.m-sub')['slideToggle'](170)
            } else {
                $(this)['parent']()['removeClass']('show')['find']('> .m-sub')['slideToggle'](170)
            }
        }
    });
    $('.show-search')['on']('click', function() {
        $('#nav-search')['fadeToggle'](170);
        $('body')['toggleClass']('search-active')
    });
    $('.Label a')['attr']('href', function(_0x316axf, _0x316ax10) {
        return _0x316ax10['replace'](_0x316ax10, _0x316ax10 + '?&max-results=' + postPerPage)
    });
    $('.avatar-image-container img')['attr']('src', function(_0x316axf, _0x316ax4) {
        _0x316ax4 = _0x316ax4['replace']('/s35-c/', '/s45-c/');
        _0x316ax4 = _0x316ax4['replace']('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png');
        return _0x316ax4
    });
    $('.author-description a')['each'](function() {
        $(this)['attr']('target', '_blank')
    });
    $('.post-nav')['each'](function() {
        var _0x316ax11 = $('a.prev-post-link')['attr']('href'),
            _0x316ax12 = $('a.next-post-link')['attr']('href');
        $['get'](_0x316ax11, function(_0x316ax13) {
            var _0x316ax14 = $(_0x316ax13)['find']('.blog-post h1.post-title')['text']();
            $('.post-prev a .post-nav-inner p')['text'](_0x316ax14)
        });
        $['get'](_0x316ax12, function(_0x316ax15) {
            var _0x316ax14 = $(_0x316ax15)['find']('.blog-post h1.post-title')['text']();
            $('.post-next a .post-nav-inner p')['text'](_0x316ax14)
        })
    });
    $('.post-body strike')['each'](function() {
        var _0x316axf = $(this),
            _0x316ax16 = _0x316axf['text']();
        if (_0x316ax16['match']('left-sidebar')) {
            _0x316axf['replaceWith']('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
        };
        if (_0x316ax16['match']('right-sidebar')) {
            _0x316axf['replaceWith']('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
        };
        if (_0x316ax16['match']('full-width')) {
            _0x316axf['replaceWith']('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
        }
    });
    $('#main-wrapper, #sidebar-wrapper')['each'](function() {
        if (fixedSidebar == true) {
            $(this)['theiaStickySidebar']({
                additionalMarginTop: 40,
                additionalMarginBottom: 40
            })
        }
    });
    $('.back-top')['each'](function() {
        var _0x316axf = $(this);
        $(window)['on']('scroll', function() {
            $(this)['scrollTop']() >= 100 ? _0x316axf['fadeIn'](250) : _0x316axf['fadeOut'](250)
        }), _0x316axf['click'](function() {
            $('html, body')['animate']({
                scrollTop: 0
            }, 500)
        })
    });
    $('.common-widget .widget-content')['each'](function() {
        var _0x316axf = $(this),
            _0x316ax17 = _0x316axf['text']()['trim'](),
            _0x316ax16 = _0x316ax17['toLowerCase'](),
            _0x316ax18 = _0x316ax17['split']('/'),
            _0x316ax19 = _0x316ax18[0],
            _0x316ax1a = _0x316ax18[1];
        _0x316ax2f(_0x316axf, _0x316ax16, _0x316ax19, _0x316ax1a)
    });
    $('.related-ready')['each'](function() {
        var _0x316axf = $(this),
            _0x316ax1a = _0x316axf['find']('.related-tag')['data']('label');
        _0x316ax2f(_0x316axf, 'related', 3, _0x316ax1a)
    });

    function _0x316ax1b(_0x316ax1c, _0x316ax4) {
        for (var _0x316ax1d = 0; _0x316ax1d < _0x316ax1c[_0x316ax4]['link']['length']; _0x316ax1d++) {
            if (_0x316ax1c[_0x316ax4]['link'][_0x316ax1d]['rel'] == 'alternate') {
                var _0x316ax1e = _0x316ax1c[_0x316ax4]['link'][_0x316ax1d]['href'];
                break
            }
        };
        return _0x316ax1e
    }

    function _0x316ax1f(_0x316ax1c, _0x316ax4, _0x316ax1e) {
        var _0x316ax20 = _0x316ax1c[_0x316ax4]['title']['$t'],
            _0x316ax21 = '<a href="' + _0x316ax1e + '">' + _0x316ax20 + '</a>';
        return _0x316ax21
    }

    function _0x316ax22(_0x316ax1c, _0x316ax4) {
        var _0x316ax23 = _0x316ax1c[_0x316ax4]['published']['$t'],
            _0x316ax24 = _0x316ax23['substring'](0, 4),
            _0x316ax25 = _0x316ax23['substring'](5, 7),
            _0x316ax26 = _0x316ax23['substring'](8, 10),
            _0x316ax27 = monthFormat[parseInt(_0x316ax25, 10) - 1] + ' ' + _0x316ax26 + ', ' + _0x316ax24;
        var _0x316ax21 = '<span class="post-date">' + _0x316ax27 + '</span>';
        return _0x316ax21
    }

    function _0x316ax28(_0x316ax1c, _0x316ax4) {
        var _0x316ax20 = _0x316ax1c[_0x316ax4]['title']['$t'],
            _0x316ax29 = _0x316ax1c[_0x316ax4]['content']['$t'];
        if ('media$thumbnail' in _0x316ax1c[_0x316ax4]) {
            var _0x316ax2a = _0x316ax1c[_0x316ax4]['media$thumbnail']['url'],
                _0x316ax2b = _0x316ax2a['replace']('/s72-c', '/w280'),
                _0x316ax2c = _0x316ax2a['replace']('/s72-c', '/w180');
            if (_0x316ax29['indexOf']('youtube.com/embed') > -1) {
                _0x316ax2b = _0x316ax2a['replace']('/default.', '/mqdefault.');
                _0x316ax2c = _0x316ax2a
            }
        } else {
            _0x316ax2b = noThumbnail['replace']('/s1600', '/w280');
            _0x316ax2c = noThumbnail['replace']('/s1600', '/w180')
        };
        var _0x316ax5 = '<img class="post-thumb" alt="' + _0x316ax20 + '" src="' + _0x316ax2b + '"/>',
            _0x316ax7 = '<img class="post-thumb" alt="' + _0x316ax20 + '" src="' + _0x316ax2c + '"/>',
            _0x316ax21 = [_0x316ax5, _0x316ax7];
        return _0x316ax21
    }

    function _0x316ax2d(_0x316ax1c, _0x316ax4) {
        if (_0x316ax1c[_0x316ax4]['category'] != undefined) {
            var _0x316ax2e = _0x316ax1c[_0x316ax4]['category'][0]['term'],
                _0x316ax21 = '<span class="post-tag">' + _0x316ax2e + '</span>'
        } else {
            _0x316ax21 = ''
        };
        return _0x316ax21
    }

    function _0x316ax2f(_0x316axf, _0x316ax16, _0x316ax19, _0x316ax1a) {
        if (_0x316ax16['match']('post-list') || _0x316ax16['match']('related')) {
            var _0x316ax30 = '';
            if (_0x316ax1a == 'recent') {
                _0x316ax30 = '/feeds/posts/default?alt=json-in-script&max-results=' + _0x316ax19
            } else {
                _0x316ax30 = '/feeds/posts/default/-/' + _0x316ax1a + '?alt=json-in-script&max-results=' + _0x316ax19
            };
            $['ajax']({
                url: _0x316ax30,
                type: 'get',
                dataType: 'jsonp',
                success: function(_0x316ax31) {
                    if (_0x316ax16['match']('post-list')) {
                        var _0x316ax32 = '<ul class="custom-widget">'
                    };
                    if (_0x316ax16['match']('related')) {
                        var _0x316ax32 = '<ul class="related-posts">'
                    };
                    var _0x316ax33 = _0x316ax31['feed']['entry'];
                    if (_0x316ax33 != undefined) {
                        for (var _0x316ax4 = 0, _0x316ax1c = _0x316ax33; _0x316ax4 < _0x316ax1c['length']; _0x316ax4++) {
                            var _0x316ax1e = _0x316ax1b(_0x316ax1c, _0x316ax4),
                                _0x316ax14 = _0x316ax1f(_0x316ax1c, _0x316ax4, _0x316ax1e),
                                _0x316ax34 = _0x316ax28(_0x316ax1c, _0x316ax4),
                                _0x316ax2e = _0x316ax2d(_0x316ax1c, _0x316ax4),
                                _0x316ax35 = _0x316ax22(_0x316ax1c, _0x316ax4);
                            var _0x316ax36 = '';
                            if (_0x316ax16['match']('post-list')) {
                                _0x316ax36 += '<li><a class="post-image-link" href="' + _0x316ax1e + '">' + _0x316ax34[1] + '</a><h2 class="post-title">' + _0x316ax14 + '</h2><div class="post-meta">' + _0x316ax35 + '</div></div></li>'
                            } else {
                                if (_0x316ax16['match']('related')) {
                                    _0x316ax36 += '<li class="related-item"><div class="post-image-wrap"><a class="post-image-link" href="' + _0x316ax1e + '">' + _0x316ax34[0] + '</a></div><h2 class="post-title">' + _0x316ax14 + '</h2><div class="post-meta">' + _0x316ax35 + '</div></li>'
                                }
                            };
                            _0x316ax32 += _0x316ax36
                        };
                        _0x316ax32 += '</ul>'
                    } else {
                        _0x316ax32 = '<ul class="no-posts">Error: No Results Found <i class="fa fa-frown-o"/></ul>'
                    };
                    _0x316axf['html'](_0x316ax32)
                }
            })
        }
    }
    $('.blog-post-comments')['each'](function() {
        var _0x316ax37 = commentsSystem,
            _0x316ax3a = $(location)['attr']('href'),
            _0x316ax3c = 'comments-system-' + _0x316ax37;
        if (_0x316ax37 == 'blogger') {
            $(this)['addClass'](_0x316ax3c)['show']()
        } else {
                        $(this)['addClass']('comments-system-blogger')['show']()
                    }
    })
})
