// Compiled by ClojureScript 0.0-2173
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
var seq__12841_12847 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12842_12848 = null;var count__12843_12849 = 0;var i__12844_12850 = 0;while(true){
if((i__12844_12850 < count__12843_12849))
{var vec__12845_12851 = cljs.core._nth.call(null,chunk__12842_12848,i__12844_12850);var v_12852 = cljs.core.nth.call(null,vec__12845_12851,0,null);var body_class_12853 = cljs.core.nth.call(null,vec__12845_12851,1,null);if(cljs.core._EQ_.call(null,v_12852,view))
{domina.add_class_BANG_.call(null,body,body_class_12853);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12853);
}
{
var G__12854 = seq__12841_12847;
var G__12855 = chunk__12842_12848;
var G__12856 = count__12843_12849;
var G__12857 = (i__12844_12850 + 1);
seq__12841_12847 = G__12854;
chunk__12842_12848 = G__12855;
count__12843_12849 = G__12856;
i__12844_12850 = G__12857;
continue;
}
} else
{var temp__4092__auto___12858 = cljs.core.seq.call(null,seq__12841_12847);if(temp__4092__auto___12858)
{var seq__12841_12859__$1 = temp__4092__auto___12858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12841_12859__$1))
{var c__4189__auto___12860 = cljs.core.chunk_first.call(null,seq__12841_12859__$1);{
var G__12861 = cljs.core.chunk_rest.call(null,seq__12841_12859__$1);
var G__12862 = c__4189__auto___12860;
var G__12863 = cljs.core.count.call(null,c__4189__auto___12860);
var G__12864 = 0;
seq__12841_12847 = G__12861;
chunk__12842_12848 = G__12862;
count__12843_12849 = G__12863;
i__12844_12850 = G__12864;
continue;
}
} else
{var vec__12846_12865 = cljs.core.first.call(null,seq__12841_12859__$1);var v_12866 = cljs.core.nth.call(null,vec__12846_12865,0,null);var body_class_12867 = cljs.core.nth.call(null,vec__12846_12865,1,null);if(cljs.core._EQ_.call(null,v_12866,view))
{domina.add_class_BANG_.call(null,body,body_class_12867);
} else
{domina.remove_class_BANG_.call(null,body,body_class_12867);
}
{
var G__12868 = cljs.core.next.call(null,seq__12841_12859__$1);
var G__12869 = null;
var G__12870 = 0;
var G__12871 = 0;
seq__12841_12847 = G__12868;
chunk__12842_12848 = G__12869;
count__12843_12849 = G__12870;
i__12844_12850 = G__12871;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__12878 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__12879 = null;var count__12880 = 0;var i__12881 = 0;while(true){
if((i__12881 < count__12880))
{var vec__12882 = cljs.core._nth.call(null,chunk__12879,i__12881);var v = cljs.core.nth.call(null,vec__12882,0,null);var _ = cljs.core.nth.call(null,vec__12882,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12878,chunk__12879,count__12880,i__12881,vec__12882,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12878,chunk__12879,count__12880,i__12881,vec__12882,v,_))
);
{
var G__12884 = seq__12878;
var G__12885 = chunk__12879;
var G__12886 = count__12880;
var G__12887 = (i__12881 + 1);
seq__12878 = G__12884;
chunk__12879 = G__12885;
count__12880 = G__12886;
i__12881 = G__12887;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__12878);if(temp__4092__auto__)
{var seq__12878__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12878__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__12878__$1);{
var G__12888 = cljs.core.chunk_rest.call(null,seq__12878__$1);
var G__12889 = c__4189__auto__;
var G__12890 = cljs.core.count.call(null,c__4189__auto__);
var G__12891 = 0;
seq__12878 = G__12888;
chunk__12879 = G__12889;
count__12880 = G__12890;
i__12881 = G__12891;
continue;
}
} else
{var vec__12883 = cljs.core.first.call(null,seq__12878__$1);var v = cljs.core.nth.call(null,vec__12883,0,null);var _ = cljs.core.nth.call(null,vec__12883,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__12878,chunk__12879,count__12880,i__12881,vec__12883,v,_,seq__12878__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__12878,chunk__12879,count__12880,i__12881,vec__12883,v,_,seq__12878__$1,temp__4092__auto__))
);
{
var G__12892 = cljs.core.next.call(null,seq__12878__$1);
var G__12893 = null;
var G__12894 = 0;
var G__12895 = 0;
seq__12878 = G__12892;
chunk__12879 = G__12893;
count__12880 = G__12894;
i__12881 = G__12895;
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
