// Compiled by ClojureScript 0.0-2268
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_18947 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_18948 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_18949 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18949,opt_wrapper_18947,table_section_wrapper_18948,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18947,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18948,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18948,cell_wrapper_18949,table_section_wrapper_18948,table_section_wrapper_18948]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__18954 = cljs.core.seq.call(null,tbody);var chunk__18955 = null;var count__18956 = (0);var i__18957 = (0);while(true){
if((i__18957 < count__18956))
{var child = cljs.core._nth.call(null,chunk__18955,i__18957);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18958 = seq__18954;
var G__18959 = chunk__18955;
var G__18960 = count__18956;
var G__18961 = (i__18957 + (1));
seq__18954 = G__18958;
chunk__18955 = G__18959;
count__18956 = G__18960;
i__18957 = G__18961;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18954);if(temp__4126__auto__)
{var seq__18954__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18954__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18954__$1);{
var G__18962 = cljs.core.chunk_rest.call(null,seq__18954__$1);
var G__18963 = c__4299__auto__;
var G__18964 = cljs.core.count.call(null,c__4299__auto__);
var G__18965 = (0);
seq__18954 = G__18962;
chunk__18955 = G__18963;
count__18956 = G__18964;
i__18957 = G__18965;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__18954__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18966 = cljs.core.next.call(null,seq__18954__$1);
var G__18967 = null;
var G__18968 = (0);
var G__18969 = (0);
seq__18954 = G__18966;
chunk__18955 = G__18967;
count__18956 = G__18968;
i__18957 = G__18969;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__18971 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__18971,(0),null);var start_wrap = cljs.core.nth.call(null,vec__18971,(1),null);var end_wrap = cljs.core.nth.call(null,vec__18971,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__18972 = wrapper.lastChild;
var G__18973 = (level - (1));
wrapper = G__18972;
level = G__18973;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj18975 = {};return obj18975;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__18976){
var mesg = cljs.core.seq(arglist__18976);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__18977){
var mesg = cljs.core.seq(arglist__18977);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__18978){
var contents = cljs.core.seq(arglist__18978);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__18979_SHARP_){return p1__18979_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__18980_SHARP_,p2__18981_SHARP_){return goog.dom.insertChildAt(p1__18980_SHARP_,p2__18981_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18983_SHARP_,p2__18982_SHARP_){return goog.dom.insertSiblingBefore(p2__18982_SHARP_,p1__18983_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18985_SHARP_,p2__18984_SHARP_){return goog.dom.insertSiblingAfter(p2__18984_SHARP_,p1__18985_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__18987_SHARP_,p2__18986_SHARP_){return goog.dom.replaceNode(p2__18986_SHARP_,p1__18987_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__18992_18996 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18993_18997 = null;var count__18994_18998 = (0);var i__18995_18999 = (0);while(true){
if((i__18995_18999 < count__18994_18998))
{var n_19000 = cljs.core._nth.call(null,chunk__18993_18997,i__18995_18999);goog.style.setStyle(n_19000,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19001 = seq__18992_18996;
var G__19002 = chunk__18993_18997;
var G__19003 = count__18994_18998;
var G__19004 = (i__18995_18999 + (1));
seq__18992_18996 = G__19001;
chunk__18993_18997 = G__19002;
count__18994_18998 = G__19003;
i__18995_18999 = G__19004;
continue;
}
} else
{var temp__4126__auto___19005 = cljs.core.seq.call(null,seq__18992_18996);if(temp__4126__auto___19005)
{var seq__18992_19006__$1 = temp__4126__auto___19005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18992_19006__$1))
{var c__4299__auto___19007 = cljs.core.chunk_first.call(null,seq__18992_19006__$1);{
var G__19008 = cljs.core.chunk_rest.call(null,seq__18992_19006__$1);
var G__19009 = c__4299__auto___19007;
var G__19010 = cljs.core.count.call(null,c__4299__auto___19007);
var G__19011 = (0);
seq__18992_18996 = G__19008;
chunk__18993_18997 = G__19009;
count__18994_18998 = G__19010;
i__18995_18999 = G__19011;
continue;
}
} else
{var n_19012 = cljs.core.first.call(null,seq__18992_19006__$1);goog.style.setStyle(n_19012,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19013 = cljs.core.next.call(null,seq__18992_19006__$1);
var G__19014 = null;
var G__19015 = (0);
var G__19016 = (0);
seq__18992_18996 = G__19013;
chunk__18993_18997 = G__19014;
count__18994_18998 = G__19015;
i__18995_18999 = G__19016;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19017){
var content = cljs.core.first(arglist__19017);
arglist__19017 = cljs.core.next(arglist__19017);
var name = cljs.core.first(arglist__19017);
var value = cljs.core.rest(arglist__19017);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__19022_19026 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19023_19027 = null;var count__19024_19028 = (0);var i__19025_19029 = (0);while(true){
if((i__19025_19029 < count__19024_19028))
{var n_19030 = cljs.core._nth.call(null,chunk__19023_19027,i__19025_19029);n_19030.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19031 = seq__19022_19026;
var G__19032 = chunk__19023_19027;
var G__19033 = count__19024_19028;
var G__19034 = (i__19025_19029 + (1));
seq__19022_19026 = G__19031;
chunk__19023_19027 = G__19032;
count__19024_19028 = G__19033;
i__19025_19029 = G__19034;
continue;
}
} else
{var temp__4126__auto___19035 = cljs.core.seq.call(null,seq__19022_19026);if(temp__4126__auto___19035)
{var seq__19022_19036__$1 = temp__4126__auto___19035;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19022_19036__$1))
{var c__4299__auto___19037 = cljs.core.chunk_first.call(null,seq__19022_19036__$1);{
var G__19038 = cljs.core.chunk_rest.call(null,seq__19022_19036__$1);
var G__19039 = c__4299__auto___19037;
var G__19040 = cljs.core.count.call(null,c__4299__auto___19037);
var G__19041 = (0);
seq__19022_19026 = G__19038;
chunk__19023_19027 = G__19039;
count__19024_19028 = G__19040;
i__19025_19029 = G__19041;
continue;
}
} else
{var n_19042 = cljs.core.first.call(null,seq__19022_19036__$1);n_19042.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19043 = cljs.core.next.call(null,seq__19022_19036__$1);
var G__19044 = null;
var G__19045 = (0);
var G__19046 = (0);
seq__19022_19026 = G__19043;
chunk__19023_19027 = G__19044;
count__19024_19028 = G__19045;
i__19025_19029 = G__19046;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19047){
var content = cljs.core.first(arglist__19047);
arglist__19047 = cljs.core.next(arglist__19047);
var name = cljs.core.first(arglist__19047);
var value = cljs.core.rest(arglist__19047);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19052_19056 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19053_19057 = null;var count__19054_19058 = (0);var i__19055_19059 = (0);while(true){
if((i__19055_19059 < count__19054_19058))
{var n_19060 = cljs.core._nth.call(null,chunk__19053_19057,i__19055_19059);n_19060.removeAttribute(cljs.core.name.call(null,name));
{
var G__19061 = seq__19052_19056;
var G__19062 = chunk__19053_19057;
var G__19063 = count__19054_19058;
var G__19064 = (i__19055_19059 + (1));
seq__19052_19056 = G__19061;
chunk__19053_19057 = G__19062;
count__19054_19058 = G__19063;
i__19055_19059 = G__19064;
continue;
}
} else
{var temp__4126__auto___19065 = cljs.core.seq.call(null,seq__19052_19056);if(temp__4126__auto___19065)
{var seq__19052_19066__$1 = temp__4126__auto___19065;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19052_19066__$1))
{var c__4299__auto___19067 = cljs.core.chunk_first.call(null,seq__19052_19066__$1);{
var G__19068 = cljs.core.chunk_rest.call(null,seq__19052_19066__$1);
var G__19069 = c__4299__auto___19067;
var G__19070 = cljs.core.count.call(null,c__4299__auto___19067);
var G__19071 = (0);
seq__19052_19056 = G__19068;
chunk__19053_19057 = G__19069;
count__19054_19058 = G__19070;
i__19055_19059 = G__19071;
continue;
}
} else
{var n_19072 = cljs.core.first.call(null,seq__19052_19066__$1);n_19072.removeAttribute(cljs.core.name.call(null,name));
{
var G__19073 = cljs.core.next.call(null,seq__19052_19066__$1);
var G__19074 = null;
var G__19075 = (0);
var G__19076 = (0);
seq__19052_19056 = G__19073;
chunk__19053_19057 = G__19074;
count__19054_19058 = G__19075;
i__19055_19059 = G__19076;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19078 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19078,(0),null);var v = cljs.core.nth.call(null,vec__19078,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19079_SHARP_){var attr = attrs__$1.item(p1__19079_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19086_19092 = cljs.core.seq.call(null,styles);var chunk__19087_19093 = null;var count__19088_19094 = (0);var i__19089_19095 = (0);while(true){
if((i__19089_19095 < count__19088_19094))
{var vec__19090_19096 = cljs.core._nth.call(null,chunk__19087_19093,i__19089_19095);var name_19097 = cljs.core.nth.call(null,vec__19090_19096,(0),null);var value_19098 = cljs.core.nth.call(null,vec__19090_19096,(1),null);domina.set_style_BANG_.call(null,content,name_19097,value_19098);
{
var G__19099 = seq__19086_19092;
var G__19100 = chunk__19087_19093;
var G__19101 = count__19088_19094;
var G__19102 = (i__19089_19095 + (1));
seq__19086_19092 = G__19099;
chunk__19087_19093 = G__19100;
count__19088_19094 = G__19101;
i__19089_19095 = G__19102;
continue;
}
} else
{var temp__4126__auto___19103 = cljs.core.seq.call(null,seq__19086_19092);if(temp__4126__auto___19103)
{var seq__19086_19104__$1 = temp__4126__auto___19103;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19086_19104__$1))
{var c__4299__auto___19105 = cljs.core.chunk_first.call(null,seq__19086_19104__$1);{
var G__19106 = cljs.core.chunk_rest.call(null,seq__19086_19104__$1);
var G__19107 = c__4299__auto___19105;
var G__19108 = cljs.core.count.call(null,c__4299__auto___19105);
var G__19109 = (0);
seq__19086_19092 = G__19106;
chunk__19087_19093 = G__19107;
count__19088_19094 = G__19108;
i__19089_19095 = G__19109;
continue;
}
} else
{var vec__19091_19110 = cljs.core.first.call(null,seq__19086_19104__$1);var name_19111 = cljs.core.nth.call(null,vec__19091_19110,(0),null);var value_19112 = cljs.core.nth.call(null,vec__19091_19110,(1),null);domina.set_style_BANG_.call(null,content,name_19111,value_19112);
{
var G__19113 = cljs.core.next.call(null,seq__19086_19104__$1);
var G__19114 = null;
var G__19115 = (0);
var G__19116 = (0);
seq__19086_19092 = G__19113;
chunk__19087_19093 = G__19114;
count__19088_19094 = G__19115;
i__19089_19095 = G__19116;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19123_19129 = cljs.core.seq.call(null,attrs);var chunk__19124_19130 = null;var count__19125_19131 = (0);var i__19126_19132 = (0);while(true){
if((i__19126_19132 < count__19125_19131))
{var vec__19127_19133 = cljs.core._nth.call(null,chunk__19124_19130,i__19126_19132);var name_19134 = cljs.core.nth.call(null,vec__19127_19133,(0),null);var value_19135 = cljs.core.nth.call(null,vec__19127_19133,(1),null);domina.set_attr_BANG_.call(null,content,name_19134,value_19135);
{
var G__19136 = seq__19123_19129;
var G__19137 = chunk__19124_19130;
var G__19138 = count__19125_19131;
var G__19139 = (i__19126_19132 + (1));
seq__19123_19129 = G__19136;
chunk__19124_19130 = G__19137;
count__19125_19131 = G__19138;
i__19126_19132 = G__19139;
continue;
}
} else
{var temp__4126__auto___19140 = cljs.core.seq.call(null,seq__19123_19129);if(temp__4126__auto___19140)
{var seq__19123_19141__$1 = temp__4126__auto___19140;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19123_19141__$1))
{var c__4299__auto___19142 = cljs.core.chunk_first.call(null,seq__19123_19141__$1);{
var G__19143 = cljs.core.chunk_rest.call(null,seq__19123_19141__$1);
var G__19144 = c__4299__auto___19142;
var G__19145 = cljs.core.count.call(null,c__4299__auto___19142);
var G__19146 = (0);
seq__19123_19129 = G__19143;
chunk__19124_19130 = G__19144;
count__19125_19131 = G__19145;
i__19126_19132 = G__19146;
continue;
}
} else
{var vec__19128_19147 = cljs.core.first.call(null,seq__19123_19141__$1);var name_19148 = cljs.core.nth.call(null,vec__19128_19147,(0),null);var value_19149 = cljs.core.nth.call(null,vec__19128_19147,(1),null);domina.set_attr_BANG_.call(null,content,name_19148,value_19149);
{
var G__19150 = cljs.core.next.call(null,seq__19123_19141__$1);
var G__19151 = null;
var G__19152 = (0);
var G__19153 = (0);
seq__19123_19129 = G__19150;
chunk__19124_19130 = G__19151;
count__19125_19131 = G__19152;
i__19126_19132 = G__19153;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19158_19162 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19159_19163 = null;var count__19160_19164 = (0);var i__19161_19165 = (0);while(true){
if((i__19161_19165 < count__19160_19164))
{var node_19166 = cljs.core._nth.call(null,chunk__19159_19163,i__19161_19165);goog.dom.classes.add(node_19166,class$);
{
var G__19167 = seq__19158_19162;
var G__19168 = chunk__19159_19163;
var G__19169 = count__19160_19164;
var G__19170 = (i__19161_19165 + (1));
seq__19158_19162 = G__19167;
chunk__19159_19163 = G__19168;
count__19160_19164 = G__19169;
i__19161_19165 = G__19170;
continue;
}
} else
{var temp__4126__auto___19171 = cljs.core.seq.call(null,seq__19158_19162);if(temp__4126__auto___19171)
{var seq__19158_19172__$1 = temp__4126__auto___19171;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19158_19172__$1))
{var c__4299__auto___19173 = cljs.core.chunk_first.call(null,seq__19158_19172__$1);{
var G__19174 = cljs.core.chunk_rest.call(null,seq__19158_19172__$1);
var G__19175 = c__4299__auto___19173;
var G__19176 = cljs.core.count.call(null,c__4299__auto___19173);
var G__19177 = (0);
seq__19158_19162 = G__19174;
chunk__19159_19163 = G__19175;
count__19160_19164 = G__19176;
i__19161_19165 = G__19177;
continue;
}
} else
{var node_19178 = cljs.core.first.call(null,seq__19158_19172__$1);goog.dom.classes.add(node_19178,class$);
{
var G__19179 = cljs.core.next.call(null,seq__19158_19172__$1);
var G__19180 = null;
var G__19181 = (0);
var G__19182 = (0);
seq__19158_19162 = G__19179;
chunk__19159_19163 = G__19180;
count__19160_19164 = G__19181;
i__19161_19165 = G__19182;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19187_19191 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19188_19192 = null;var count__19189_19193 = (0);var i__19190_19194 = (0);while(true){
if((i__19190_19194 < count__19189_19193))
{var node_19195 = cljs.core._nth.call(null,chunk__19188_19192,i__19190_19194);goog.dom.classes.remove(node_19195,class$);
{
var G__19196 = seq__19187_19191;
var G__19197 = chunk__19188_19192;
var G__19198 = count__19189_19193;
var G__19199 = (i__19190_19194 + (1));
seq__19187_19191 = G__19196;
chunk__19188_19192 = G__19197;
count__19189_19193 = G__19198;
i__19190_19194 = G__19199;
continue;
}
} else
{var temp__4126__auto___19200 = cljs.core.seq.call(null,seq__19187_19191);if(temp__4126__auto___19200)
{var seq__19187_19201__$1 = temp__4126__auto___19200;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19187_19201__$1))
{var c__4299__auto___19202 = cljs.core.chunk_first.call(null,seq__19187_19201__$1);{
var G__19203 = cljs.core.chunk_rest.call(null,seq__19187_19201__$1);
var G__19204 = c__4299__auto___19202;
var G__19205 = cljs.core.count.call(null,c__4299__auto___19202);
var G__19206 = (0);
seq__19187_19191 = G__19203;
chunk__19188_19192 = G__19204;
count__19189_19193 = G__19205;
i__19190_19194 = G__19206;
continue;
}
} else
{var node_19207 = cljs.core.first.call(null,seq__19187_19201__$1);goog.dom.classes.remove(node_19207,class$);
{
var G__19208 = cljs.core.next.call(null,seq__19187_19201__$1);
var G__19209 = null;
var G__19210 = (0);
var G__19211 = (0);
seq__19187_19191 = G__19208;
chunk__19188_19192 = G__19209;
count__19189_19193 = G__19210;
i__19190_19194 = G__19211;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19216_19220 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19217_19221 = null;var count__19218_19222 = (0);var i__19219_19223 = (0);while(true){
if((i__19219_19223 < count__19218_19222))
{var node_19224 = cljs.core._nth.call(null,chunk__19217_19221,i__19219_19223);goog.dom.classes.toggle(node_19224,class$);
{
var G__19225 = seq__19216_19220;
var G__19226 = chunk__19217_19221;
var G__19227 = count__19218_19222;
var G__19228 = (i__19219_19223 + (1));
seq__19216_19220 = G__19225;
chunk__19217_19221 = G__19226;
count__19218_19222 = G__19227;
i__19219_19223 = G__19228;
continue;
}
} else
{var temp__4126__auto___19229 = cljs.core.seq.call(null,seq__19216_19220);if(temp__4126__auto___19229)
{var seq__19216_19230__$1 = temp__4126__auto___19229;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19216_19230__$1))
{var c__4299__auto___19231 = cljs.core.chunk_first.call(null,seq__19216_19230__$1);{
var G__19232 = cljs.core.chunk_rest.call(null,seq__19216_19230__$1);
var G__19233 = c__4299__auto___19231;
var G__19234 = cljs.core.count.call(null,c__4299__auto___19231);
var G__19235 = (0);
seq__19216_19220 = G__19232;
chunk__19217_19221 = G__19233;
count__19218_19222 = G__19234;
i__19219_19223 = G__19235;
continue;
}
} else
{var node_19236 = cljs.core.first.call(null,seq__19216_19230__$1);goog.dom.classes.toggle(node_19236,class$);
{
var G__19237 = cljs.core.next.call(null,seq__19216_19230__$1);
var G__19238 = null;
var G__19239 = (0);
var G__19240 = (0);
seq__19216_19220 = G__19237;
chunk__19217_19221 = G__19238;
count__19218_19222 = G__19239;
i__19219_19223 = G__19240;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19249__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19245_19250 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19246_19251 = null;var count__19247_19252 = (0);var i__19248_19253 = (0);while(true){
if((i__19248_19253 < count__19247_19252))
{var node_19254 = cljs.core._nth.call(null,chunk__19246_19251,i__19248_19253);goog.dom.classes.set(node_19254,classes_19249__$1);
{
var G__19255 = seq__19245_19250;
var G__19256 = chunk__19246_19251;
var G__19257 = count__19247_19252;
var G__19258 = (i__19248_19253 + (1));
seq__19245_19250 = G__19255;
chunk__19246_19251 = G__19256;
count__19247_19252 = G__19257;
i__19248_19253 = G__19258;
continue;
}
} else
{var temp__4126__auto___19259 = cljs.core.seq.call(null,seq__19245_19250);if(temp__4126__auto___19259)
{var seq__19245_19260__$1 = temp__4126__auto___19259;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19245_19260__$1))
{var c__4299__auto___19261 = cljs.core.chunk_first.call(null,seq__19245_19260__$1);{
var G__19262 = cljs.core.chunk_rest.call(null,seq__19245_19260__$1);
var G__19263 = c__4299__auto___19261;
var G__19264 = cljs.core.count.call(null,c__4299__auto___19261);
var G__19265 = (0);
seq__19245_19250 = G__19262;
chunk__19246_19251 = G__19263;
count__19247_19252 = G__19264;
i__19248_19253 = G__19265;
continue;
}
} else
{var node_19266 = cljs.core.first.call(null,seq__19245_19260__$1);goog.dom.classes.set(node_19266,classes_19249__$1);
{
var G__19267 = cljs.core.next.call(null,seq__19245_19260__$1);
var G__19268 = null;
var G__19269 = (0);
var G__19270 = (0);
seq__19245_19250 = G__19267;
chunk__19246_19251 = G__19268;
count__19247_19252 = G__19269;
i__19248_19253 = G__19270;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19275_19279 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19276_19280 = null;var count__19277_19281 = (0);var i__19278_19282 = (0);while(true){
if((i__19278_19282 < count__19277_19281))
{var node_19283 = cljs.core._nth.call(null,chunk__19276_19280,i__19278_19282);goog.dom.setTextContent(node_19283,value);
{
var G__19284 = seq__19275_19279;
var G__19285 = chunk__19276_19280;
var G__19286 = count__19277_19281;
var G__19287 = (i__19278_19282 + (1));
seq__19275_19279 = G__19284;
chunk__19276_19280 = G__19285;
count__19277_19281 = G__19286;
i__19278_19282 = G__19287;
continue;
}
} else
{var temp__4126__auto___19288 = cljs.core.seq.call(null,seq__19275_19279);if(temp__4126__auto___19288)
{var seq__19275_19289__$1 = temp__4126__auto___19288;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19275_19289__$1))
{var c__4299__auto___19290 = cljs.core.chunk_first.call(null,seq__19275_19289__$1);{
var G__19291 = cljs.core.chunk_rest.call(null,seq__19275_19289__$1);
var G__19292 = c__4299__auto___19290;
var G__19293 = cljs.core.count.call(null,c__4299__auto___19290);
var G__19294 = (0);
seq__19275_19279 = G__19291;
chunk__19276_19280 = G__19292;
count__19277_19281 = G__19293;
i__19278_19282 = G__19294;
continue;
}
} else
{var node_19295 = cljs.core.first.call(null,seq__19275_19289__$1);goog.dom.setTextContent(node_19295,value);
{
var G__19296 = cljs.core.next.call(null,seq__19275_19289__$1);
var G__19297 = null;
var G__19298 = (0);
var G__19299 = (0);
seq__19275_19279 = G__19296;
chunk__19276_19280 = G__19297;
count__19277_19281 = G__19298;
i__19278_19282 = G__19299;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19304_19308 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19305_19309 = null;var count__19306_19310 = (0);var i__19307_19311 = (0);while(true){
if((i__19307_19311 < count__19306_19310))
{var node_19312 = cljs.core._nth.call(null,chunk__19305_19309,i__19307_19311);goog.dom.forms.setValue(node_19312,value);
{
var G__19313 = seq__19304_19308;
var G__19314 = chunk__19305_19309;
var G__19315 = count__19306_19310;
var G__19316 = (i__19307_19311 + (1));
seq__19304_19308 = G__19313;
chunk__19305_19309 = G__19314;
count__19306_19310 = G__19315;
i__19307_19311 = G__19316;
continue;
}
} else
{var temp__4126__auto___19317 = cljs.core.seq.call(null,seq__19304_19308);if(temp__4126__auto___19317)
{var seq__19304_19318__$1 = temp__4126__auto___19317;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19304_19318__$1))
{var c__4299__auto___19319 = cljs.core.chunk_first.call(null,seq__19304_19318__$1);{
var G__19320 = cljs.core.chunk_rest.call(null,seq__19304_19318__$1);
var G__19321 = c__4299__auto___19319;
var G__19322 = cljs.core.count.call(null,c__4299__auto___19319);
var G__19323 = (0);
seq__19304_19308 = G__19320;
chunk__19305_19309 = G__19321;
count__19306_19310 = G__19322;
i__19307_19311 = G__19323;
continue;
}
} else
{var node_19324 = cljs.core.first.call(null,seq__19304_19318__$1);goog.dom.forms.setValue(node_19324,value);
{
var G__19325 = cljs.core.next.call(null,seq__19304_19318__$1);
var G__19326 = null;
var G__19327 = (0);
var G__19328 = (0);
seq__19304_19308 = G__19325;
chunk__19305_19309 = G__19326;
count__19306_19310 = G__19327;
i__19307_19311 = G__19328;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_19339 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19335_19340 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19336_19341 = null;var count__19337_19342 = (0);var i__19338_19343 = (0);while(true){
if((i__19338_19343 < count__19337_19342))
{var node_19344 = cljs.core._nth.call(null,chunk__19336_19341,i__19338_19343);node_19344.innerHTML = value_19339;
{
var G__19345 = seq__19335_19340;
var G__19346 = chunk__19336_19341;
var G__19347 = count__19337_19342;
var G__19348 = (i__19338_19343 + (1));
seq__19335_19340 = G__19345;
chunk__19336_19341 = G__19346;
count__19337_19342 = G__19347;
i__19338_19343 = G__19348;
continue;
}
} else
{var temp__4126__auto___19349 = cljs.core.seq.call(null,seq__19335_19340);if(temp__4126__auto___19349)
{var seq__19335_19350__$1 = temp__4126__auto___19349;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19335_19350__$1))
{var c__4299__auto___19351 = cljs.core.chunk_first.call(null,seq__19335_19350__$1);{
var G__19352 = cljs.core.chunk_rest.call(null,seq__19335_19350__$1);
var G__19353 = c__4299__auto___19351;
var G__19354 = cljs.core.count.call(null,c__4299__auto___19351);
var G__19355 = (0);
seq__19335_19340 = G__19352;
chunk__19336_19341 = G__19353;
count__19337_19342 = G__19354;
i__19338_19343 = G__19355;
continue;
}
} else
{var node_19356 = cljs.core.first.call(null,seq__19335_19350__$1);node_19356.innerHTML = value_19339;
{
var G__19357 = cljs.core.next.call(null,seq__19335_19350__$1);
var G__19358 = null;
var G__19359 = (0);
var G__19360 = (0);
seq__19335_19340 = G__19357;
chunk__19336_19341 = G__19358;
count__19337_19342 = G__19359;
i__19338_19343 = G__19360;
continue;
}
}
} else
{}
}
break;
}
}catch (e19334){if((e19334 instanceof Error))
{var e_19361 = e19334;domina.replace_children_BANG_.call(null,content,value_19339);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e19334;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19368_19372 = cljs.core.seq.call(null,children);var chunk__19369_19373 = null;var count__19370_19374 = (0);var i__19371_19375 = (0);while(true){
if((i__19371_19375 < count__19370_19374))
{var child_19376 = cljs.core._nth.call(null,chunk__19369_19373,i__19371_19375);frag.appendChild(child_19376);
{
var G__19377 = seq__19368_19372;
var G__19378 = chunk__19369_19373;
var G__19379 = count__19370_19374;
var G__19380 = (i__19371_19375 + (1));
seq__19368_19372 = G__19377;
chunk__19369_19373 = G__19378;
count__19370_19374 = G__19379;
i__19371_19375 = G__19380;
continue;
}
} else
{var temp__4126__auto___19381 = cljs.core.seq.call(null,seq__19368_19372);if(temp__4126__auto___19381)
{var seq__19368_19382__$1 = temp__4126__auto___19381;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19368_19382__$1))
{var c__4299__auto___19383 = cljs.core.chunk_first.call(null,seq__19368_19382__$1);{
var G__19384 = cljs.core.chunk_rest.call(null,seq__19368_19382__$1);
var G__19385 = c__4299__auto___19383;
var G__19386 = cljs.core.count.call(null,c__4299__auto___19383);
var G__19387 = (0);
seq__19368_19372 = G__19384;
chunk__19369_19373 = G__19385;
count__19370_19374 = G__19386;
i__19371_19375 = G__19387;
continue;
}
} else
{var child_19388 = cljs.core.first.call(null,seq__19368_19382__$1);frag.appendChild(child_19388);
{
var G__19389 = cljs.core.next.call(null,seq__19368_19382__$1);
var G__19390 = null;
var G__19391 = (0);
var G__19392 = (0);
seq__19368_19372 = G__19389;
chunk__19369_19373 = G__19390;
count__19370_19374 = G__19391;
i__19371_19375 = G__19392;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__19362_SHARP_,p2__19363_SHARP_){return f.call(null,p1__19362_SHARP_,p2__19363_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19394 = list_thing;if(G__19394)
{var bit__4193__auto__ = (G__19394.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19394.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19394.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19394);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19394);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__19395 = content;if(G__19395)
{var bit__4193__auto__ = (G__19395.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19395.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19395.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19395);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19395);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__19396 = content;if(G__19396)
{var bit__4193__auto__ = (G__19396.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__19396.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19396.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19396);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19396);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
