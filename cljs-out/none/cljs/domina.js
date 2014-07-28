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
var opt_wrapper_57236 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_57237 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_57238 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_57238,opt_wrapper_57236,table_section_wrapper_57237,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_57236,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_57237,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_57237,cell_wrapper_57238,table_section_wrapper_57237,table_section_wrapper_57237]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__57243 = cljs.core.seq.call(null,tbody);var chunk__57244 = null;var count__57245 = (0);var i__57246 = (0);while(true){
if((i__57246 < count__57245))
{var child = cljs.core._nth.call(null,chunk__57244,i__57246);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__57247 = seq__57243;
var G__57248 = chunk__57244;
var G__57249 = count__57245;
var G__57250 = (i__57246 + (1));
seq__57243 = G__57247;
chunk__57244 = G__57248;
count__57245 = G__57249;
i__57246 = G__57250;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__57243);if(temp__4126__auto__)
{var seq__57243__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57243__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__57243__$1);{
var G__57251 = cljs.core.chunk_rest.call(null,seq__57243__$1);
var G__57252 = c__4299__auto__;
var G__57253 = cljs.core.count.call(null,c__4299__auto__);
var G__57254 = (0);
seq__57243 = G__57251;
chunk__57244 = G__57252;
count__57245 = G__57253;
i__57246 = G__57254;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__57243__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__57255 = cljs.core.next.call(null,seq__57243__$1);
var G__57256 = null;
var G__57257 = (0);
var G__57258 = (0);
seq__57243 = G__57255;
chunk__57244 = G__57256;
count__57245 = G__57257;
i__57246 = G__57258;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__57260 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__57260,(0),null);var start_wrap = cljs.core.nth.call(null,vec__57260,(1),null);var end_wrap = cljs.core.nth.call(null,vec__57260,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__57261 = wrapper.lastChild;
var G__57262 = (level - (1));
wrapper = G__57261;
level = G__57262;
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
domina.DomContent = (function (){var obj57264 = {};return obj57264;
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
log_debug.cljs$lang$applyTo = (function (arglist__57265){
var mesg = cljs.core.seq(arglist__57265);
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
log.cljs$lang$applyTo = (function (arglist__57266){
var mesg = cljs.core.seq(arglist__57266);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__57267){
var contents = cljs.core.seq(arglist__57267);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__57268_SHARP_){return p1__57268_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__57269_SHARP_,p2__57270_SHARP_){return goog.dom.insertChildAt(p1__57269_SHARP_,p2__57270_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__57272_SHARP_,p2__57271_SHARP_){return goog.dom.insertSiblingBefore(p2__57271_SHARP_,p1__57272_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__57274_SHARP_,p2__57273_SHARP_){return goog.dom.insertSiblingAfter(p2__57273_SHARP_,p1__57274_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__57276_SHARP_,p2__57275_SHARP_){return goog.dom.replaceNode(p2__57275_SHARP_,p1__57276_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__57281_57285 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57282_57286 = null;var count__57283_57287 = (0);var i__57284_57288 = (0);while(true){
if((i__57284_57288 < count__57283_57287))
{var n_57289 = cljs.core._nth.call(null,chunk__57282_57286,i__57284_57288);goog.style.setStyle(n_57289,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57290 = seq__57281_57285;
var G__57291 = chunk__57282_57286;
var G__57292 = count__57283_57287;
var G__57293 = (i__57284_57288 + (1));
seq__57281_57285 = G__57290;
chunk__57282_57286 = G__57291;
count__57283_57287 = G__57292;
i__57284_57288 = G__57293;
continue;
}
} else
{var temp__4126__auto___57294 = cljs.core.seq.call(null,seq__57281_57285);if(temp__4126__auto___57294)
{var seq__57281_57295__$1 = temp__4126__auto___57294;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57281_57295__$1))
{var c__4299__auto___57296 = cljs.core.chunk_first.call(null,seq__57281_57295__$1);{
var G__57297 = cljs.core.chunk_rest.call(null,seq__57281_57295__$1);
var G__57298 = c__4299__auto___57296;
var G__57299 = cljs.core.count.call(null,c__4299__auto___57296);
var G__57300 = (0);
seq__57281_57285 = G__57297;
chunk__57282_57286 = G__57298;
count__57283_57287 = G__57299;
i__57284_57288 = G__57300;
continue;
}
} else
{var n_57301 = cljs.core.first.call(null,seq__57281_57295__$1);goog.style.setStyle(n_57301,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57302 = cljs.core.next.call(null,seq__57281_57295__$1);
var G__57303 = null;
var G__57304 = (0);
var G__57305 = (0);
seq__57281_57285 = G__57302;
chunk__57282_57286 = G__57303;
count__57283_57287 = G__57304;
i__57284_57288 = G__57305;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__57306){
var content = cljs.core.first(arglist__57306);
arglist__57306 = cljs.core.next(arglist__57306);
var name = cljs.core.first(arglist__57306);
var value = cljs.core.rest(arglist__57306);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__57311_57315 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57312_57316 = null;var count__57313_57317 = (0);var i__57314_57318 = (0);while(true){
if((i__57314_57318 < count__57313_57317))
{var n_57319 = cljs.core._nth.call(null,chunk__57312_57316,i__57314_57318);n_57319.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57320 = seq__57311_57315;
var G__57321 = chunk__57312_57316;
var G__57322 = count__57313_57317;
var G__57323 = (i__57314_57318 + (1));
seq__57311_57315 = G__57320;
chunk__57312_57316 = G__57321;
count__57313_57317 = G__57322;
i__57314_57318 = G__57323;
continue;
}
} else
{var temp__4126__auto___57324 = cljs.core.seq.call(null,seq__57311_57315);if(temp__4126__auto___57324)
{var seq__57311_57325__$1 = temp__4126__auto___57324;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57311_57325__$1))
{var c__4299__auto___57326 = cljs.core.chunk_first.call(null,seq__57311_57325__$1);{
var G__57327 = cljs.core.chunk_rest.call(null,seq__57311_57325__$1);
var G__57328 = c__4299__auto___57326;
var G__57329 = cljs.core.count.call(null,c__4299__auto___57326);
var G__57330 = (0);
seq__57311_57315 = G__57327;
chunk__57312_57316 = G__57328;
count__57313_57317 = G__57329;
i__57314_57318 = G__57330;
continue;
}
} else
{var n_57331 = cljs.core.first.call(null,seq__57311_57325__$1);n_57331.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__57332 = cljs.core.next.call(null,seq__57311_57325__$1);
var G__57333 = null;
var G__57334 = (0);
var G__57335 = (0);
seq__57311_57315 = G__57332;
chunk__57312_57316 = G__57333;
count__57313_57317 = G__57334;
i__57314_57318 = G__57335;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__57336){
var content = cljs.core.first(arglist__57336);
arglist__57336 = cljs.core.next(arglist__57336);
var name = cljs.core.first(arglist__57336);
var value = cljs.core.rest(arglist__57336);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__57341_57345 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57342_57346 = null;var count__57343_57347 = (0);var i__57344_57348 = (0);while(true){
if((i__57344_57348 < count__57343_57347))
{var n_57349 = cljs.core._nth.call(null,chunk__57342_57346,i__57344_57348);n_57349.removeAttribute(cljs.core.name.call(null,name));
{
var G__57350 = seq__57341_57345;
var G__57351 = chunk__57342_57346;
var G__57352 = count__57343_57347;
var G__57353 = (i__57344_57348 + (1));
seq__57341_57345 = G__57350;
chunk__57342_57346 = G__57351;
count__57343_57347 = G__57352;
i__57344_57348 = G__57353;
continue;
}
} else
{var temp__4126__auto___57354 = cljs.core.seq.call(null,seq__57341_57345);if(temp__4126__auto___57354)
{var seq__57341_57355__$1 = temp__4126__auto___57354;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57341_57355__$1))
{var c__4299__auto___57356 = cljs.core.chunk_first.call(null,seq__57341_57355__$1);{
var G__57357 = cljs.core.chunk_rest.call(null,seq__57341_57355__$1);
var G__57358 = c__4299__auto___57356;
var G__57359 = cljs.core.count.call(null,c__4299__auto___57356);
var G__57360 = (0);
seq__57341_57345 = G__57357;
chunk__57342_57346 = G__57358;
count__57343_57347 = G__57359;
i__57344_57348 = G__57360;
continue;
}
} else
{var n_57361 = cljs.core.first.call(null,seq__57341_57355__$1);n_57361.removeAttribute(cljs.core.name.call(null,name));
{
var G__57362 = cljs.core.next.call(null,seq__57341_57355__$1);
var G__57363 = null;
var G__57364 = (0);
var G__57365 = (0);
seq__57341_57345 = G__57362;
chunk__57342_57346 = G__57363;
count__57343_57347 = G__57364;
i__57344_57348 = G__57365;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__57367 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__57367,(0),null);var v = cljs.core.nth.call(null,vec__57367,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__57368_SHARP_){var attr = attrs__$1.item(p1__57368_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__57375_57381 = cljs.core.seq.call(null,styles);var chunk__57376_57382 = null;var count__57377_57383 = (0);var i__57378_57384 = (0);while(true){
if((i__57378_57384 < count__57377_57383))
{var vec__57379_57385 = cljs.core._nth.call(null,chunk__57376_57382,i__57378_57384);var name_57386 = cljs.core.nth.call(null,vec__57379_57385,(0),null);var value_57387 = cljs.core.nth.call(null,vec__57379_57385,(1),null);domina.set_style_BANG_.call(null,content,name_57386,value_57387);
{
var G__57388 = seq__57375_57381;
var G__57389 = chunk__57376_57382;
var G__57390 = count__57377_57383;
var G__57391 = (i__57378_57384 + (1));
seq__57375_57381 = G__57388;
chunk__57376_57382 = G__57389;
count__57377_57383 = G__57390;
i__57378_57384 = G__57391;
continue;
}
} else
{var temp__4126__auto___57392 = cljs.core.seq.call(null,seq__57375_57381);if(temp__4126__auto___57392)
{var seq__57375_57393__$1 = temp__4126__auto___57392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57375_57393__$1))
{var c__4299__auto___57394 = cljs.core.chunk_first.call(null,seq__57375_57393__$1);{
var G__57395 = cljs.core.chunk_rest.call(null,seq__57375_57393__$1);
var G__57396 = c__4299__auto___57394;
var G__57397 = cljs.core.count.call(null,c__4299__auto___57394);
var G__57398 = (0);
seq__57375_57381 = G__57395;
chunk__57376_57382 = G__57396;
count__57377_57383 = G__57397;
i__57378_57384 = G__57398;
continue;
}
} else
{var vec__57380_57399 = cljs.core.first.call(null,seq__57375_57393__$1);var name_57400 = cljs.core.nth.call(null,vec__57380_57399,(0),null);var value_57401 = cljs.core.nth.call(null,vec__57380_57399,(1),null);domina.set_style_BANG_.call(null,content,name_57400,value_57401);
{
var G__57402 = cljs.core.next.call(null,seq__57375_57393__$1);
var G__57403 = null;
var G__57404 = (0);
var G__57405 = (0);
seq__57375_57381 = G__57402;
chunk__57376_57382 = G__57403;
count__57377_57383 = G__57404;
i__57378_57384 = G__57405;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__57412_57418 = cljs.core.seq.call(null,attrs);var chunk__57413_57419 = null;var count__57414_57420 = (0);var i__57415_57421 = (0);while(true){
if((i__57415_57421 < count__57414_57420))
{var vec__57416_57422 = cljs.core._nth.call(null,chunk__57413_57419,i__57415_57421);var name_57423 = cljs.core.nth.call(null,vec__57416_57422,(0),null);var value_57424 = cljs.core.nth.call(null,vec__57416_57422,(1),null);domina.set_attr_BANG_.call(null,content,name_57423,value_57424);
{
var G__57425 = seq__57412_57418;
var G__57426 = chunk__57413_57419;
var G__57427 = count__57414_57420;
var G__57428 = (i__57415_57421 + (1));
seq__57412_57418 = G__57425;
chunk__57413_57419 = G__57426;
count__57414_57420 = G__57427;
i__57415_57421 = G__57428;
continue;
}
} else
{var temp__4126__auto___57429 = cljs.core.seq.call(null,seq__57412_57418);if(temp__4126__auto___57429)
{var seq__57412_57430__$1 = temp__4126__auto___57429;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57412_57430__$1))
{var c__4299__auto___57431 = cljs.core.chunk_first.call(null,seq__57412_57430__$1);{
var G__57432 = cljs.core.chunk_rest.call(null,seq__57412_57430__$1);
var G__57433 = c__4299__auto___57431;
var G__57434 = cljs.core.count.call(null,c__4299__auto___57431);
var G__57435 = (0);
seq__57412_57418 = G__57432;
chunk__57413_57419 = G__57433;
count__57414_57420 = G__57434;
i__57415_57421 = G__57435;
continue;
}
} else
{var vec__57417_57436 = cljs.core.first.call(null,seq__57412_57430__$1);var name_57437 = cljs.core.nth.call(null,vec__57417_57436,(0),null);var value_57438 = cljs.core.nth.call(null,vec__57417_57436,(1),null);domina.set_attr_BANG_.call(null,content,name_57437,value_57438);
{
var G__57439 = cljs.core.next.call(null,seq__57412_57430__$1);
var G__57440 = null;
var G__57441 = (0);
var G__57442 = (0);
seq__57412_57418 = G__57439;
chunk__57413_57419 = G__57440;
count__57414_57420 = G__57441;
i__57415_57421 = G__57442;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__57447_57451 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57448_57452 = null;var count__57449_57453 = (0);var i__57450_57454 = (0);while(true){
if((i__57450_57454 < count__57449_57453))
{var node_57455 = cljs.core._nth.call(null,chunk__57448_57452,i__57450_57454);goog.dom.classes.add(node_57455,class$);
{
var G__57456 = seq__57447_57451;
var G__57457 = chunk__57448_57452;
var G__57458 = count__57449_57453;
var G__57459 = (i__57450_57454 + (1));
seq__57447_57451 = G__57456;
chunk__57448_57452 = G__57457;
count__57449_57453 = G__57458;
i__57450_57454 = G__57459;
continue;
}
} else
{var temp__4126__auto___57460 = cljs.core.seq.call(null,seq__57447_57451);if(temp__4126__auto___57460)
{var seq__57447_57461__$1 = temp__4126__auto___57460;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57447_57461__$1))
{var c__4299__auto___57462 = cljs.core.chunk_first.call(null,seq__57447_57461__$1);{
var G__57463 = cljs.core.chunk_rest.call(null,seq__57447_57461__$1);
var G__57464 = c__4299__auto___57462;
var G__57465 = cljs.core.count.call(null,c__4299__auto___57462);
var G__57466 = (0);
seq__57447_57451 = G__57463;
chunk__57448_57452 = G__57464;
count__57449_57453 = G__57465;
i__57450_57454 = G__57466;
continue;
}
} else
{var node_57467 = cljs.core.first.call(null,seq__57447_57461__$1);goog.dom.classes.add(node_57467,class$);
{
var G__57468 = cljs.core.next.call(null,seq__57447_57461__$1);
var G__57469 = null;
var G__57470 = (0);
var G__57471 = (0);
seq__57447_57451 = G__57468;
chunk__57448_57452 = G__57469;
count__57449_57453 = G__57470;
i__57450_57454 = G__57471;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__57476_57480 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57477_57481 = null;var count__57478_57482 = (0);var i__57479_57483 = (0);while(true){
if((i__57479_57483 < count__57478_57482))
{var node_57484 = cljs.core._nth.call(null,chunk__57477_57481,i__57479_57483);goog.dom.classes.remove(node_57484,class$);
{
var G__57485 = seq__57476_57480;
var G__57486 = chunk__57477_57481;
var G__57487 = count__57478_57482;
var G__57488 = (i__57479_57483 + (1));
seq__57476_57480 = G__57485;
chunk__57477_57481 = G__57486;
count__57478_57482 = G__57487;
i__57479_57483 = G__57488;
continue;
}
} else
{var temp__4126__auto___57489 = cljs.core.seq.call(null,seq__57476_57480);if(temp__4126__auto___57489)
{var seq__57476_57490__$1 = temp__4126__auto___57489;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57476_57490__$1))
{var c__4299__auto___57491 = cljs.core.chunk_first.call(null,seq__57476_57490__$1);{
var G__57492 = cljs.core.chunk_rest.call(null,seq__57476_57490__$1);
var G__57493 = c__4299__auto___57491;
var G__57494 = cljs.core.count.call(null,c__4299__auto___57491);
var G__57495 = (0);
seq__57476_57480 = G__57492;
chunk__57477_57481 = G__57493;
count__57478_57482 = G__57494;
i__57479_57483 = G__57495;
continue;
}
} else
{var node_57496 = cljs.core.first.call(null,seq__57476_57490__$1);goog.dom.classes.remove(node_57496,class$);
{
var G__57497 = cljs.core.next.call(null,seq__57476_57490__$1);
var G__57498 = null;
var G__57499 = (0);
var G__57500 = (0);
seq__57476_57480 = G__57497;
chunk__57477_57481 = G__57498;
count__57478_57482 = G__57499;
i__57479_57483 = G__57500;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__57505_57509 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57506_57510 = null;var count__57507_57511 = (0);var i__57508_57512 = (0);while(true){
if((i__57508_57512 < count__57507_57511))
{var node_57513 = cljs.core._nth.call(null,chunk__57506_57510,i__57508_57512);goog.dom.classes.toggle(node_57513,class$);
{
var G__57514 = seq__57505_57509;
var G__57515 = chunk__57506_57510;
var G__57516 = count__57507_57511;
var G__57517 = (i__57508_57512 + (1));
seq__57505_57509 = G__57514;
chunk__57506_57510 = G__57515;
count__57507_57511 = G__57516;
i__57508_57512 = G__57517;
continue;
}
} else
{var temp__4126__auto___57518 = cljs.core.seq.call(null,seq__57505_57509);if(temp__4126__auto___57518)
{var seq__57505_57519__$1 = temp__4126__auto___57518;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57505_57519__$1))
{var c__4299__auto___57520 = cljs.core.chunk_first.call(null,seq__57505_57519__$1);{
var G__57521 = cljs.core.chunk_rest.call(null,seq__57505_57519__$1);
var G__57522 = c__4299__auto___57520;
var G__57523 = cljs.core.count.call(null,c__4299__auto___57520);
var G__57524 = (0);
seq__57505_57509 = G__57521;
chunk__57506_57510 = G__57522;
count__57507_57511 = G__57523;
i__57508_57512 = G__57524;
continue;
}
} else
{var node_57525 = cljs.core.first.call(null,seq__57505_57519__$1);goog.dom.classes.toggle(node_57525,class$);
{
var G__57526 = cljs.core.next.call(null,seq__57505_57519__$1);
var G__57527 = null;
var G__57528 = (0);
var G__57529 = (0);
seq__57505_57509 = G__57526;
chunk__57506_57510 = G__57527;
count__57507_57511 = G__57528;
i__57508_57512 = G__57529;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_57538__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__57534_57539 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57535_57540 = null;var count__57536_57541 = (0);var i__57537_57542 = (0);while(true){
if((i__57537_57542 < count__57536_57541))
{var node_57543 = cljs.core._nth.call(null,chunk__57535_57540,i__57537_57542);goog.dom.classes.set(node_57543,classes_57538__$1);
{
var G__57544 = seq__57534_57539;
var G__57545 = chunk__57535_57540;
var G__57546 = count__57536_57541;
var G__57547 = (i__57537_57542 + (1));
seq__57534_57539 = G__57544;
chunk__57535_57540 = G__57545;
count__57536_57541 = G__57546;
i__57537_57542 = G__57547;
continue;
}
} else
{var temp__4126__auto___57548 = cljs.core.seq.call(null,seq__57534_57539);if(temp__4126__auto___57548)
{var seq__57534_57549__$1 = temp__4126__auto___57548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57534_57549__$1))
{var c__4299__auto___57550 = cljs.core.chunk_first.call(null,seq__57534_57549__$1);{
var G__57551 = cljs.core.chunk_rest.call(null,seq__57534_57549__$1);
var G__57552 = c__4299__auto___57550;
var G__57553 = cljs.core.count.call(null,c__4299__auto___57550);
var G__57554 = (0);
seq__57534_57539 = G__57551;
chunk__57535_57540 = G__57552;
count__57536_57541 = G__57553;
i__57537_57542 = G__57554;
continue;
}
} else
{var node_57555 = cljs.core.first.call(null,seq__57534_57549__$1);goog.dom.classes.set(node_57555,classes_57538__$1);
{
var G__57556 = cljs.core.next.call(null,seq__57534_57549__$1);
var G__57557 = null;
var G__57558 = (0);
var G__57559 = (0);
seq__57534_57539 = G__57556;
chunk__57535_57540 = G__57557;
count__57536_57541 = G__57558;
i__57537_57542 = G__57559;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__57564_57568 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57565_57569 = null;var count__57566_57570 = (0);var i__57567_57571 = (0);while(true){
if((i__57567_57571 < count__57566_57570))
{var node_57572 = cljs.core._nth.call(null,chunk__57565_57569,i__57567_57571);goog.dom.setTextContent(node_57572,value);
{
var G__57573 = seq__57564_57568;
var G__57574 = chunk__57565_57569;
var G__57575 = count__57566_57570;
var G__57576 = (i__57567_57571 + (1));
seq__57564_57568 = G__57573;
chunk__57565_57569 = G__57574;
count__57566_57570 = G__57575;
i__57567_57571 = G__57576;
continue;
}
} else
{var temp__4126__auto___57577 = cljs.core.seq.call(null,seq__57564_57568);if(temp__4126__auto___57577)
{var seq__57564_57578__$1 = temp__4126__auto___57577;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57564_57578__$1))
{var c__4299__auto___57579 = cljs.core.chunk_first.call(null,seq__57564_57578__$1);{
var G__57580 = cljs.core.chunk_rest.call(null,seq__57564_57578__$1);
var G__57581 = c__4299__auto___57579;
var G__57582 = cljs.core.count.call(null,c__4299__auto___57579);
var G__57583 = (0);
seq__57564_57568 = G__57580;
chunk__57565_57569 = G__57581;
count__57566_57570 = G__57582;
i__57567_57571 = G__57583;
continue;
}
} else
{var node_57584 = cljs.core.first.call(null,seq__57564_57578__$1);goog.dom.setTextContent(node_57584,value);
{
var G__57585 = cljs.core.next.call(null,seq__57564_57578__$1);
var G__57586 = null;
var G__57587 = (0);
var G__57588 = (0);
seq__57564_57568 = G__57585;
chunk__57565_57569 = G__57586;
count__57566_57570 = G__57587;
i__57567_57571 = G__57588;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__57593_57597 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57594_57598 = null;var count__57595_57599 = (0);var i__57596_57600 = (0);while(true){
if((i__57596_57600 < count__57595_57599))
{var node_57601 = cljs.core._nth.call(null,chunk__57594_57598,i__57596_57600);goog.dom.forms.setValue(node_57601,value);
{
var G__57602 = seq__57593_57597;
var G__57603 = chunk__57594_57598;
var G__57604 = count__57595_57599;
var G__57605 = (i__57596_57600 + (1));
seq__57593_57597 = G__57602;
chunk__57594_57598 = G__57603;
count__57595_57599 = G__57604;
i__57596_57600 = G__57605;
continue;
}
} else
{var temp__4126__auto___57606 = cljs.core.seq.call(null,seq__57593_57597);if(temp__4126__auto___57606)
{var seq__57593_57607__$1 = temp__4126__auto___57606;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57593_57607__$1))
{var c__4299__auto___57608 = cljs.core.chunk_first.call(null,seq__57593_57607__$1);{
var G__57609 = cljs.core.chunk_rest.call(null,seq__57593_57607__$1);
var G__57610 = c__4299__auto___57608;
var G__57611 = cljs.core.count.call(null,c__4299__auto___57608);
var G__57612 = (0);
seq__57593_57597 = G__57609;
chunk__57594_57598 = G__57610;
count__57595_57599 = G__57611;
i__57596_57600 = G__57612;
continue;
}
} else
{var node_57613 = cljs.core.first.call(null,seq__57593_57607__$1);goog.dom.forms.setValue(node_57613,value);
{
var G__57614 = cljs.core.next.call(null,seq__57593_57607__$1);
var G__57615 = null;
var G__57616 = (0);
var G__57617 = (0);
seq__57593_57597 = G__57614;
chunk__57594_57598 = G__57615;
count__57595_57599 = G__57616;
i__57596_57600 = G__57617;
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
{var value_57628 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__57624_57629 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__57625_57630 = null;var count__57626_57631 = (0);var i__57627_57632 = (0);while(true){
if((i__57627_57632 < count__57626_57631))
{var node_57633 = cljs.core._nth.call(null,chunk__57625_57630,i__57627_57632);node_57633.innerHTML = value_57628;
{
var G__57634 = seq__57624_57629;
var G__57635 = chunk__57625_57630;
var G__57636 = count__57626_57631;
var G__57637 = (i__57627_57632 + (1));
seq__57624_57629 = G__57634;
chunk__57625_57630 = G__57635;
count__57626_57631 = G__57636;
i__57627_57632 = G__57637;
continue;
}
} else
{var temp__4126__auto___57638 = cljs.core.seq.call(null,seq__57624_57629);if(temp__4126__auto___57638)
{var seq__57624_57639__$1 = temp__4126__auto___57638;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57624_57639__$1))
{var c__4299__auto___57640 = cljs.core.chunk_first.call(null,seq__57624_57639__$1);{
var G__57641 = cljs.core.chunk_rest.call(null,seq__57624_57639__$1);
var G__57642 = c__4299__auto___57640;
var G__57643 = cljs.core.count.call(null,c__4299__auto___57640);
var G__57644 = (0);
seq__57624_57629 = G__57641;
chunk__57625_57630 = G__57642;
count__57626_57631 = G__57643;
i__57627_57632 = G__57644;
continue;
}
} else
{var node_57645 = cljs.core.first.call(null,seq__57624_57639__$1);node_57645.innerHTML = value_57628;
{
var G__57646 = cljs.core.next.call(null,seq__57624_57639__$1);
var G__57647 = null;
var G__57648 = (0);
var G__57649 = (0);
seq__57624_57629 = G__57646;
chunk__57625_57630 = G__57647;
count__57626_57631 = G__57648;
i__57627_57632 = G__57649;
continue;
}
}
} else
{}
}
break;
}
}catch (e57623){if((e57623 instanceof Error))
{var e_57650 = e57623;domina.replace_children_BANG_.call(null,content,value_57628);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e57623;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__57657_57661 = cljs.core.seq.call(null,children);var chunk__57658_57662 = null;var count__57659_57663 = (0);var i__57660_57664 = (0);while(true){
if((i__57660_57664 < count__57659_57663))
{var child_57665 = cljs.core._nth.call(null,chunk__57658_57662,i__57660_57664);frag.appendChild(child_57665);
{
var G__57666 = seq__57657_57661;
var G__57667 = chunk__57658_57662;
var G__57668 = count__57659_57663;
var G__57669 = (i__57660_57664 + (1));
seq__57657_57661 = G__57666;
chunk__57658_57662 = G__57667;
count__57659_57663 = G__57668;
i__57660_57664 = G__57669;
continue;
}
} else
{var temp__4126__auto___57670 = cljs.core.seq.call(null,seq__57657_57661);if(temp__4126__auto___57670)
{var seq__57657_57671__$1 = temp__4126__auto___57670;if(cljs.core.chunked_seq_QMARK_.call(null,seq__57657_57671__$1))
{var c__4299__auto___57672 = cljs.core.chunk_first.call(null,seq__57657_57671__$1);{
var G__57673 = cljs.core.chunk_rest.call(null,seq__57657_57671__$1);
var G__57674 = c__4299__auto___57672;
var G__57675 = cljs.core.count.call(null,c__4299__auto___57672);
var G__57676 = (0);
seq__57657_57661 = G__57673;
chunk__57658_57662 = G__57674;
count__57659_57663 = G__57675;
i__57660_57664 = G__57676;
continue;
}
} else
{var child_57677 = cljs.core.first.call(null,seq__57657_57671__$1);frag.appendChild(child_57677);
{
var G__57678 = cljs.core.next.call(null,seq__57657_57671__$1);
var G__57679 = null;
var G__57680 = (0);
var G__57681 = (0);
seq__57657_57661 = G__57678;
chunk__57658_57662 = G__57679;
count__57659_57663 = G__57680;
i__57660_57664 = G__57681;
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
return (function (p1__57651_SHARP_,p2__57652_SHARP_){return f.call(null,p1__57651_SHARP_,p2__57652_SHARP_);
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
{if((function (){var G__57683 = list_thing;if(G__57683)
{var bit__4193__auto__ = (G__57683.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__57683.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57683.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57683);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57683);
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
{if((function (){var G__57684 = content;if(G__57684)
{var bit__4193__auto__ = (G__57684.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__57684.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57684.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57684);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57684);
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
{if((function (){var G__57685 = content;if(G__57685)
{var bit__4193__auto__ = (G__57685.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__57685.cljs$core$ISeqable$))
{return true;
} else
{if((!G__57685.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57685);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__57685);
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

//# sourceMappingURL=domina.js.map