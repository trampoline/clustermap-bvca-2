// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1108654330),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
} else
{return null;
}
}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.call(null,"body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__12835_12841 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12836_12842 = null;var count__12837_12843 = 0;var i__12838_12844 = 0;while(true){
if((i__12838_12844 < count__12837_12843))
{var vec__12839_12845 = cljs.core._nth.call(null,chunk__12836_12842,i__12838_12844);var v_12846 = cljs.core.nth.call(null,vec__12839_12845,0,null);var body_class_12847 = cljs.core.nth.call(null,vec__12839_12845,1,null);if(cljs.core._EQ_.call(null,v_12846,view))
{domina.add_class_BANG_.call(null,body,body_class_12847);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12847);
}
{
var G__12848 = seq__12835_12841;
var G__12849 = chunk__12836_12842;
var G__12850 = count__12837_12843;
var G__12851 = (i__12838_12844 + 1);
seq__12835_12841 = G__12848;
chunk__12836_12842 = G__12849;
count__12837_12843 = G__12850;
i__12838_12844 = G__12851;
continue;
}
} else
{var temp__4092__auto___12852 = cljs.core.seq.call(null,seq__12835_12841);if(temp__4092__auto___12852)
{var seq__12835_12853__$1 = temp__4092__auto___12852;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12835_12853__$1))
{var c__4148__auto___12854 = cljs.core.chunk_first.call(null,seq__12835_12853__$1);{
var G__12855 = cljs.core.chunk_rest.call(null,seq__12835_12853__$1);
var G__12856 = c__4148__auto___12854;
var G__12857 = cljs.core.count.call(null,c__4148__auto___12854);
var G__12858 = 0;
seq__12835_12841 = G__12855;
chunk__12836_12842 = G__12856;
count__12837_12843 = G__12857;
i__12838_12844 = G__12858;
continue;
}
} else
{var vec__12840_12859 = cljs.core.first.call(null,seq__12835_12853__$1);var v_12860 = cljs.core.nth.call(null,vec__12840_12859,0,null);var body_class_12861 = cljs.core.nth.call(null,vec__12840_12859,1,null);if(cljs.core._EQ_.call(null,v_12860,view))
{domina.add_class_BANG_.call(null,body,body_class_12861);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12861);
}
{
var G__12862 = cljs.core.next.call(null,seq__12835_12853__$1);
var G__12863 = null;
var G__12864 = 0;
var G__12865 = 0;
seq__12835_12841 = G__12862;
chunk__12836_12842 = G__12863;
count__12837_12843 = G__12864;
i__12838_12844 = G__12865;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12872 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12873 = null;var count__12874 = 0;var i__12875 = 0;while(true){
if((i__12875 < count__12874))
{var vec__12876 = cljs.core._nth.call(null,chunk__12873,i__12875);var v = cljs.core.nth.call(null,vec__12876,0,null);var _ = cljs.core.nth.call(null,vec__12876,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12872,chunk__12873,count__12874,i__12875,vec__12876,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12872,chunk__12873,count__12874,i__12875,vec__12876,v,_))
);
{
var G__12878 = seq__12872;
var G__12879 = chunk__12873;
var G__12880 = count__12874;
var G__12881 = (i__12875 + 1);
seq__12872 = G__12878;
chunk__12873 = G__12879;
count__12874 = G__12880;
i__12875 = G__12881;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12872);if(temp__4092__auto__)
{var seq__12872__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12872__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__12872__$1);{
var G__12882 = cljs.core.chunk_rest.call(null,seq__12872__$1);
var G__12883 = c__4148__auto__;
var G__12884 = cljs.core.count.call(null,c__4148__auto__);
var G__12885 = 0;
seq__12872 = G__12882;
chunk__12873 = G__12883;
count__12874 = G__12884;
i__12875 = G__12885;
continue;
}
} else
{var vec__12877 = cljs.core.first.call(null,seq__12872__$1);var v = cljs.core.nth.call(null,vec__12877,0,null);var _ = cljs.core.nth.call(null,vec__12877,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12872,chunk__12873,count__12874,i__12875,vec__12877,v,_,seq__12872__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12872,chunk__12873,count__12874,i__12875,vec__12877,v,_,seq__12872__$1,temp__4092__auto__))
);
{
var G__12886 = cljs.core.next.call(null,seq__12872__$1);
var G__12887 = null;
var G__12888 = 0;
var G__12889 = 0;
seq__12872 = G__12886;
chunk__12873 = G__12887;
count__12874 = G__12888;
i__12875 = G__12889;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});

//# sourceMappingURL=nav.js.map