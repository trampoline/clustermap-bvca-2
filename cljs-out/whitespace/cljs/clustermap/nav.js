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
var seq__45752_45758 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45753_45759 = null;var count__45754_45760 = 0;var i__45755_45761 = 0;while(true){
if((i__45755_45761 < count__45754_45760))
{var vec__45756_45762 = cljs.core._nth.call(null,chunk__45753_45759,i__45755_45761);var v_45763 = cljs.core.nth.call(null,vec__45756_45762,0,null);var body_class_45764 = cljs.core.nth.call(null,vec__45756_45762,1,null);if(cljs.core._EQ_.call(null,v_45763,view))
{domina.add_class_BANG_.call(null,body,body_class_45764);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45764);
}
{
var G__45765 = seq__45752_45758;
var G__45766 = chunk__45753_45759;
var G__45767 = count__45754_45760;
var G__45768 = (i__45755_45761 + 1);
seq__45752_45758 = G__45765;
chunk__45753_45759 = G__45766;
count__45754_45760 = G__45767;
i__45755_45761 = G__45768;
continue;
}
} else
{var temp__4092__auto___45769 = cljs.core.seq.call(null,seq__45752_45758);if(temp__4092__auto___45769)
{var seq__45752_45770__$1 = temp__4092__auto___45769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45752_45770__$1))
{var c__4189__auto___45771 = cljs.core.chunk_first.call(null,seq__45752_45770__$1);{
var G__45772 = cljs.core.chunk_rest.call(null,seq__45752_45770__$1);
var G__45773 = c__4189__auto___45771;
var G__45774 = cljs.core.count.call(null,c__4189__auto___45771);
var G__45775 = 0;
seq__45752_45758 = G__45772;
chunk__45753_45759 = G__45773;
count__45754_45760 = G__45774;
i__45755_45761 = G__45775;
continue;
}
} else
{var vec__45757_45776 = cljs.core.first.call(null,seq__45752_45770__$1);var v_45777 = cljs.core.nth.call(null,vec__45757_45776,0,null);var body_class_45778 = cljs.core.nth.call(null,vec__45757_45776,1,null);if(cljs.core._EQ_.call(null,v_45777,view))
{domina.add_class_BANG_.call(null,body,body_class_45778);
} else
{domina.remove_class_BANG_.call(null,body,body_class_45778);
}
{
var G__45779 = cljs.core.next.call(null,seq__45752_45770__$1);
var G__45780 = null;
var G__45781 = 0;
var G__45782 = 0;
seq__45752_45758 = G__45779;
chunk__45753_45759 = G__45780;
count__45754_45760 = G__45781;
i__45755_45761 = G__45782;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__45789 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__45790 = null;var count__45791 = 0;var i__45792 = 0;while(true){
if((i__45792 < count__45791))
{var vec__45793 = cljs.core._nth.call(null,chunk__45790,i__45792);var v = cljs.core.nth.call(null,vec__45793,0,null);var _ = cljs.core.nth.call(null,vec__45793,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45789,chunk__45790,count__45791,i__45792,vec__45793,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45789,chunk__45790,count__45791,i__45792,vec__45793,v,_))
);
{
var G__45795 = seq__45789;
var G__45796 = chunk__45790;
var G__45797 = count__45791;
var G__45798 = (i__45792 + 1);
seq__45789 = G__45795;
chunk__45790 = G__45796;
count__45791 = G__45797;
i__45792 = G__45798;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__45789);if(temp__4092__auto__)
{var seq__45789__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__45789__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__45789__$1);{
var G__45799 = cljs.core.chunk_rest.call(null,seq__45789__$1);
var G__45800 = c__4189__auto__;
var G__45801 = cljs.core.count.call(null,c__4189__auto__);
var G__45802 = 0;
seq__45789 = G__45799;
chunk__45790 = G__45800;
count__45791 = G__45801;
i__45792 = G__45802;
continue;
}
} else
{var vec__45794 = cljs.core.first.call(null,seq__45789__$1);var v = cljs.core.nth.call(null,vec__45794,0,null);var _ = cljs.core.nth.call(null,vec__45794,1,null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,[cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),new cljs.core.Keyword(null,"click","click",1108654330),((function (seq__45789,chunk__45790,count__45791,i__45792,vec__45794,v,_,seq__45789__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),v], null));
});})(seq__45789,chunk__45790,count__45791,i__45792,vec__45794,v,_,seq__45789__$1,temp__4092__auto__))
);
{
var G__45803 = cljs.core.next.call(null,seq__45789__$1);
var G__45804 = null;
var G__45805 = 0;
var G__45806 = 0;
seq__45789 = G__45803;
chunk__45790 = G__45804;
count__45791 = G__45805;
i__45792 = G__45806;
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
