// Compiled by ClojureScript 0.0-2261
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
var opt_wrapper_52276 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_52277 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_52278 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_52278,opt_wrapper_52276,table_section_wrapper_52277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_52276,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_52277,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_52277,cell_wrapper_52278,table_section_wrapper_52277,table_section_wrapper_52277]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__52283 = cljs.core.seq.call(null,tbody);var chunk__52284 = null;var count__52285 = (0);var i__52286 = (0);while(true){
if((i__52286 < count__52285))
{var child = cljs.core._nth.call(null,chunk__52284,i__52286);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__52287 = seq__52283;
var G__52288 = chunk__52284;
var G__52289 = count__52285;
var G__52290 = (i__52286 + (1));
seq__52283 = G__52287;
chunk__52284 = G__52288;
count__52285 = G__52289;
i__52286 = G__52290;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52283);if(temp__4126__auto__)
{var seq__52283__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52283__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__52283__$1);{
var G__52291 = cljs.core.chunk_rest.call(null,seq__52283__$1);
var G__52292 = c__4299__auto__;
var G__52293 = cljs.core.count.call(null,c__4299__auto__);
var G__52294 = (0);
seq__52283 = G__52291;
chunk__52284 = G__52292;
count__52285 = G__52293;
i__52286 = G__52294;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__52283__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__52295 = cljs.core.next.call(null,seq__52283__$1);
var G__52296 = null;
var G__52297 = (0);
var G__52298 = (0);
seq__52283 = G__52295;
chunk__52284 = G__52296;
count__52285 = G__52297;
i__52286 = G__52298;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__52300 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__52300,(0),null);var start_wrap = cljs.core.nth.call(null,vec__52300,(1),null);var end_wrap = cljs.core.nth.call(null,vec__52300,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__52301 = wrapper.lastChild;
var G__52302 = (level - (1));
wrapper = G__52301;
level = G__52302;
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
domina.DomContent = (function (){var obj52304 = {};return obj52304;
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
log_debug.cljs$lang$applyTo = (function (arglist__52305){
var mesg = cljs.core.seq(arglist__52305);
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
log.cljs$lang$applyTo = (function (arglist__52306){
var mesg = cljs.core.seq(arglist__52306);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__52307){
var contents = cljs.core.seq(arglist__52307);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__52308_SHARP_){return p1__52308_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__52309_SHARP_,p2__52310_SHARP_){return goog.dom.insertChildAt(p1__52309_SHARP_,p2__52310_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__52312_SHARP_,p2__52311_SHARP_){return goog.dom.insertSiblingBefore(p2__52311_SHARP_,p1__52312_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__52314_SHARP_,p2__52313_SHARP_){return goog.dom.insertSiblingAfter(p2__52313_SHARP_,p1__52314_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__52316_SHARP_,p2__52315_SHARP_){return goog.dom.replaceNode(p2__52315_SHARP_,p1__52316_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__52321_52325 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52322_52326 = null;var count__52323_52327 = (0);var i__52324_52328 = (0);while(true){
if((i__52324_52328 < count__52323_52327))
{var n_52329 = cljs.core._nth.call(null,chunk__52322_52326,i__52324_52328);goog.style.setStyle(n_52329,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__52330 = seq__52321_52325;
var G__52331 = chunk__52322_52326;
var G__52332 = count__52323_52327;
var G__52333 = (i__52324_52328 + (1));
seq__52321_52325 = G__52330;
chunk__52322_52326 = G__52331;
count__52323_52327 = G__52332;
i__52324_52328 = G__52333;
continue;
}
} else
{var temp__4126__auto___52334 = cljs.core.seq.call(null,seq__52321_52325);if(temp__4126__auto___52334)
{var seq__52321_52335__$1 = temp__4126__auto___52334;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52321_52335__$1))
{var c__4299__auto___52336 = cljs.core.chunk_first.call(null,seq__52321_52335__$1);{
var G__52337 = cljs.core.chunk_rest.call(null,seq__52321_52335__$1);
var G__52338 = c__4299__auto___52336;
var G__52339 = cljs.core.count.call(null,c__4299__auto___52336);
var G__52340 = (0);
seq__52321_52325 = G__52337;
chunk__52322_52326 = G__52338;
count__52323_52327 = G__52339;
i__52324_52328 = G__52340;
continue;
}
} else
{var n_52341 = cljs.core.first.call(null,seq__52321_52335__$1);goog.style.setStyle(n_52341,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__52342 = cljs.core.next.call(null,seq__52321_52335__$1);
var G__52343 = null;
var G__52344 = (0);
var G__52345 = (0);
seq__52321_52325 = G__52342;
chunk__52322_52326 = G__52343;
count__52323_52327 = G__52344;
i__52324_52328 = G__52345;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__52346){
var content = cljs.core.first(arglist__52346);
arglist__52346 = cljs.core.next(arglist__52346);
var name = cljs.core.first(arglist__52346);
var value = cljs.core.rest(arglist__52346);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__52351_52355 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52352_52356 = null;var count__52353_52357 = (0);var i__52354_52358 = (0);while(true){
if((i__52354_52358 < count__52353_52357))
{var n_52359 = cljs.core._nth.call(null,chunk__52352_52356,i__52354_52358);n_52359.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__52360 = seq__52351_52355;
var G__52361 = chunk__52352_52356;
var G__52362 = count__52353_52357;
var G__52363 = (i__52354_52358 + (1));
seq__52351_52355 = G__52360;
chunk__52352_52356 = G__52361;
count__52353_52357 = G__52362;
i__52354_52358 = G__52363;
continue;
}
} else
{var temp__4126__auto___52364 = cljs.core.seq.call(null,seq__52351_52355);if(temp__4126__auto___52364)
{var seq__52351_52365__$1 = temp__4126__auto___52364;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52351_52365__$1))
{var c__4299__auto___52366 = cljs.core.chunk_first.call(null,seq__52351_52365__$1);{
var G__52367 = cljs.core.chunk_rest.call(null,seq__52351_52365__$1);
var G__52368 = c__4299__auto___52366;
var G__52369 = cljs.core.count.call(null,c__4299__auto___52366);
var G__52370 = (0);
seq__52351_52355 = G__52367;
chunk__52352_52356 = G__52368;
count__52353_52357 = G__52369;
i__52354_52358 = G__52370;
continue;
}
} else
{var n_52371 = cljs.core.first.call(null,seq__52351_52365__$1);n_52371.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__52372 = cljs.core.next.call(null,seq__52351_52365__$1);
var G__52373 = null;
var G__52374 = (0);
var G__52375 = (0);
seq__52351_52355 = G__52372;
chunk__52352_52356 = G__52373;
count__52353_52357 = G__52374;
i__52354_52358 = G__52375;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__52376){
var content = cljs.core.first(arglist__52376);
arglist__52376 = cljs.core.next(arglist__52376);
var name = cljs.core.first(arglist__52376);
var value = cljs.core.rest(arglist__52376);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__52381_52385 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52382_52386 = null;var count__52383_52387 = (0);var i__52384_52388 = (0);while(true){
if((i__52384_52388 < count__52383_52387))
{var n_52389 = cljs.core._nth.call(null,chunk__52382_52386,i__52384_52388);n_52389.removeAttribute(cljs.core.name.call(null,name));
{
var G__52390 = seq__52381_52385;
var G__52391 = chunk__52382_52386;
var G__52392 = count__52383_52387;
var G__52393 = (i__52384_52388 + (1));
seq__52381_52385 = G__52390;
chunk__52382_52386 = G__52391;
count__52383_52387 = G__52392;
i__52384_52388 = G__52393;
continue;
}
} else
{var temp__4126__auto___52394 = cljs.core.seq.call(null,seq__52381_52385);if(temp__4126__auto___52394)
{var seq__52381_52395__$1 = temp__4126__auto___52394;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52381_52395__$1))
{var c__4299__auto___52396 = cljs.core.chunk_first.call(null,seq__52381_52395__$1);{
var G__52397 = cljs.core.chunk_rest.call(null,seq__52381_52395__$1);
var G__52398 = c__4299__auto___52396;
var G__52399 = cljs.core.count.call(null,c__4299__auto___52396);
var G__52400 = (0);
seq__52381_52385 = G__52397;
chunk__52382_52386 = G__52398;
count__52383_52387 = G__52399;
i__52384_52388 = G__52400;
continue;
}
} else
{var n_52401 = cljs.core.first.call(null,seq__52381_52395__$1);n_52401.removeAttribute(cljs.core.name.call(null,name));
{
var G__52402 = cljs.core.next.call(null,seq__52381_52395__$1);
var G__52403 = null;
var G__52404 = (0);
var G__52405 = (0);
seq__52381_52385 = G__52402;
chunk__52382_52386 = G__52403;
count__52383_52387 = G__52404;
i__52384_52388 = G__52405;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__52407 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__52407,(0),null);var v = cljs.core.nth.call(null,vec__52407,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__52408_SHARP_){var attr = attrs__$1.item(p1__52408_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__52415_52421 = cljs.core.seq.call(null,styles);var chunk__52416_52422 = null;var count__52417_52423 = (0);var i__52418_52424 = (0);while(true){
if((i__52418_52424 < count__52417_52423))
{var vec__52419_52425 = cljs.core._nth.call(null,chunk__52416_52422,i__52418_52424);var name_52426 = cljs.core.nth.call(null,vec__52419_52425,(0),null);var value_52427 = cljs.core.nth.call(null,vec__52419_52425,(1),null);domina.set_style_BANG_.call(null,content,name_52426,value_52427);
{
var G__52428 = seq__52415_52421;
var G__52429 = chunk__52416_52422;
var G__52430 = count__52417_52423;
var G__52431 = (i__52418_52424 + (1));
seq__52415_52421 = G__52428;
chunk__52416_52422 = G__52429;
count__52417_52423 = G__52430;
i__52418_52424 = G__52431;
continue;
}
} else
{var temp__4126__auto___52432 = cljs.core.seq.call(null,seq__52415_52421);if(temp__4126__auto___52432)
{var seq__52415_52433__$1 = temp__4126__auto___52432;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52415_52433__$1))
{var c__4299__auto___52434 = cljs.core.chunk_first.call(null,seq__52415_52433__$1);{
var G__52435 = cljs.core.chunk_rest.call(null,seq__52415_52433__$1);
var G__52436 = c__4299__auto___52434;
var G__52437 = cljs.core.count.call(null,c__4299__auto___52434);
var G__52438 = (0);
seq__52415_52421 = G__52435;
chunk__52416_52422 = G__52436;
count__52417_52423 = G__52437;
i__52418_52424 = G__52438;
continue;
}
} else
{var vec__52420_52439 = cljs.core.first.call(null,seq__52415_52433__$1);var name_52440 = cljs.core.nth.call(null,vec__52420_52439,(0),null);var value_52441 = cljs.core.nth.call(null,vec__52420_52439,(1),null);domina.set_style_BANG_.call(null,content,name_52440,value_52441);
{
var G__52442 = cljs.core.next.call(null,seq__52415_52433__$1);
var G__52443 = null;
var G__52444 = (0);
var G__52445 = (0);
seq__52415_52421 = G__52442;
chunk__52416_52422 = G__52443;
count__52417_52423 = G__52444;
i__52418_52424 = G__52445;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__52452_52458 = cljs.core.seq.call(null,attrs);var chunk__52453_52459 = null;var count__52454_52460 = (0);var i__52455_52461 = (0);while(true){
if((i__52455_52461 < count__52454_52460))
{var vec__52456_52462 = cljs.core._nth.call(null,chunk__52453_52459,i__52455_52461);var name_52463 = cljs.core.nth.call(null,vec__52456_52462,(0),null);var value_52464 = cljs.core.nth.call(null,vec__52456_52462,(1),null);domina.set_attr_BANG_.call(null,content,name_52463,value_52464);
{
var G__52465 = seq__52452_52458;
var G__52466 = chunk__52453_52459;
var G__52467 = count__52454_52460;
var G__52468 = (i__52455_52461 + (1));
seq__52452_52458 = G__52465;
chunk__52453_52459 = G__52466;
count__52454_52460 = G__52467;
i__52455_52461 = G__52468;
continue;
}
} else
{var temp__4126__auto___52469 = cljs.core.seq.call(null,seq__52452_52458);if(temp__4126__auto___52469)
{var seq__52452_52470__$1 = temp__4126__auto___52469;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52452_52470__$1))
{var c__4299__auto___52471 = cljs.core.chunk_first.call(null,seq__52452_52470__$1);{
var G__52472 = cljs.core.chunk_rest.call(null,seq__52452_52470__$1);
var G__52473 = c__4299__auto___52471;
var G__52474 = cljs.core.count.call(null,c__4299__auto___52471);
var G__52475 = (0);
seq__52452_52458 = G__52472;
chunk__52453_52459 = G__52473;
count__52454_52460 = G__52474;
i__52455_52461 = G__52475;
continue;
}
} else
{var vec__52457_52476 = cljs.core.first.call(null,seq__52452_52470__$1);var name_52477 = cljs.core.nth.call(null,vec__52457_52476,(0),null);var value_52478 = cljs.core.nth.call(null,vec__52457_52476,(1),null);domina.set_attr_BANG_.call(null,content,name_52477,value_52478);
{
var G__52479 = cljs.core.next.call(null,seq__52452_52470__$1);
var G__52480 = null;
var G__52481 = (0);
var G__52482 = (0);
seq__52452_52458 = G__52479;
chunk__52453_52459 = G__52480;
count__52454_52460 = G__52481;
i__52455_52461 = G__52482;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__52487_52491 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52488_52492 = null;var count__52489_52493 = (0);var i__52490_52494 = (0);while(true){
if((i__52490_52494 < count__52489_52493))
{var node_52495 = cljs.core._nth.call(null,chunk__52488_52492,i__52490_52494);goog.dom.classes.add(node_52495,class$);
{
var G__52496 = seq__52487_52491;
var G__52497 = chunk__52488_52492;
var G__52498 = count__52489_52493;
var G__52499 = (i__52490_52494 + (1));
seq__52487_52491 = G__52496;
chunk__52488_52492 = G__52497;
count__52489_52493 = G__52498;
i__52490_52494 = G__52499;
continue;
}
} else
{var temp__4126__auto___52500 = cljs.core.seq.call(null,seq__52487_52491);if(temp__4126__auto___52500)
{var seq__52487_52501__$1 = temp__4126__auto___52500;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52487_52501__$1))
{var c__4299__auto___52502 = cljs.core.chunk_first.call(null,seq__52487_52501__$1);{
var G__52503 = cljs.core.chunk_rest.call(null,seq__52487_52501__$1);
var G__52504 = c__4299__auto___52502;
var G__52505 = cljs.core.count.call(null,c__4299__auto___52502);
var G__52506 = (0);
seq__52487_52491 = G__52503;
chunk__52488_52492 = G__52504;
count__52489_52493 = G__52505;
i__52490_52494 = G__52506;
continue;
}
} else
{var node_52507 = cljs.core.first.call(null,seq__52487_52501__$1);goog.dom.classes.add(node_52507,class$);
{
var G__52508 = cljs.core.next.call(null,seq__52487_52501__$1);
var G__52509 = null;
var G__52510 = (0);
var G__52511 = (0);
seq__52487_52491 = G__52508;
chunk__52488_52492 = G__52509;
count__52489_52493 = G__52510;
i__52490_52494 = G__52511;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__52516_52520 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52517_52521 = null;var count__52518_52522 = (0);var i__52519_52523 = (0);while(true){
if((i__52519_52523 < count__52518_52522))
{var node_52524 = cljs.core._nth.call(null,chunk__52517_52521,i__52519_52523);goog.dom.classes.remove(node_52524,class$);
{
var G__52525 = seq__52516_52520;
var G__52526 = chunk__52517_52521;
var G__52527 = count__52518_52522;
var G__52528 = (i__52519_52523 + (1));
seq__52516_52520 = G__52525;
chunk__52517_52521 = G__52526;
count__52518_52522 = G__52527;
i__52519_52523 = G__52528;
continue;
}
} else
{var temp__4126__auto___52529 = cljs.core.seq.call(null,seq__52516_52520);if(temp__4126__auto___52529)
{var seq__52516_52530__$1 = temp__4126__auto___52529;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52516_52530__$1))
{var c__4299__auto___52531 = cljs.core.chunk_first.call(null,seq__52516_52530__$1);{
var G__52532 = cljs.core.chunk_rest.call(null,seq__52516_52530__$1);
var G__52533 = c__4299__auto___52531;
var G__52534 = cljs.core.count.call(null,c__4299__auto___52531);
var G__52535 = (0);
seq__52516_52520 = G__52532;
chunk__52517_52521 = G__52533;
count__52518_52522 = G__52534;
i__52519_52523 = G__52535;
continue;
}
} else
{var node_52536 = cljs.core.first.call(null,seq__52516_52530__$1);goog.dom.classes.remove(node_52536,class$);
{
var G__52537 = cljs.core.next.call(null,seq__52516_52530__$1);
var G__52538 = null;
var G__52539 = (0);
var G__52540 = (0);
seq__52516_52520 = G__52537;
chunk__52517_52521 = G__52538;
count__52518_52522 = G__52539;
i__52519_52523 = G__52540;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__52545_52549 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52546_52550 = null;var count__52547_52551 = (0);var i__52548_52552 = (0);while(true){
if((i__52548_52552 < count__52547_52551))
{var node_52553 = cljs.core._nth.call(null,chunk__52546_52550,i__52548_52552);goog.dom.classes.toggle(node_52553,class$);
{
var G__52554 = seq__52545_52549;
var G__52555 = chunk__52546_52550;
var G__52556 = count__52547_52551;
var G__52557 = (i__52548_52552 + (1));
seq__52545_52549 = G__52554;
chunk__52546_52550 = G__52555;
count__52547_52551 = G__52556;
i__52548_52552 = G__52557;
continue;
}
} else
{var temp__4126__auto___52558 = cljs.core.seq.call(null,seq__52545_52549);if(temp__4126__auto___52558)
{var seq__52545_52559__$1 = temp__4126__auto___52558;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52545_52559__$1))
{var c__4299__auto___52560 = cljs.core.chunk_first.call(null,seq__52545_52559__$1);{
var G__52561 = cljs.core.chunk_rest.call(null,seq__52545_52559__$1);
var G__52562 = c__4299__auto___52560;
var G__52563 = cljs.core.count.call(null,c__4299__auto___52560);
var G__52564 = (0);
seq__52545_52549 = G__52561;
chunk__52546_52550 = G__52562;
count__52547_52551 = G__52563;
i__52548_52552 = G__52564;
continue;
}
} else
{var node_52565 = cljs.core.first.call(null,seq__52545_52559__$1);goog.dom.classes.toggle(node_52565,class$);
{
var G__52566 = cljs.core.next.call(null,seq__52545_52559__$1);
var G__52567 = null;
var G__52568 = (0);
var G__52569 = (0);
seq__52545_52549 = G__52566;
chunk__52546_52550 = G__52567;
count__52547_52551 = G__52568;
i__52548_52552 = G__52569;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_52578__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__52574_52579 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52575_52580 = null;var count__52576_52581 = (0);var i__52577_52582 = (0);while(true){
if((i__52577_52582 < count__52576_52581))
{var node_52583 = cljs.core._nth.call(null,chunk__52575_52580,i__52577_52582);goog.dom.classes.set(node_52583,classes_52578__$1);
{
var G__52584 = seq__52574_52579;
var G__52585 = chunk__52575_52580;
var G__52586 = count__52576_52581;
var G__52587 = (i__52577_52582 + (1));
seq__52574_52579 = G__52584;
chunk__52575_52580 = G__52585;
count__52576_52581 = G__52586;
i__52577_52582 = G__52587;
continue;
}
} else
{var temp__4126__auto___52588 = cljs.core.seq.call(null,seq__52574_52579);if(temp__4126__auto___52588)
{var seq__52574_52589__$1 = temp__4126__auto___52588;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52574_52589__$1))
{var c__4299__auto___52590 = cljs.core.chunk_first.call(null,seq__52574_52589__$1);{
var G__52591 = cljs.core.chunk_rest.call(null,seq__52574_52589__$1);
var G__52592 = c__4299__auto___52590;
var G__52593 = cljs.core.count.call(null,c__4299__auto___52590);
var G__52594 = (0);
seq__52574_52579 = G__52591;
chunk__52575_52580 = G__52592;
count__52576_52581 = G__52593;
i__52577_52582 = G__52594;
continue;
}
} else
{var node_52595 = cljs.core.first.call(null,seq__52574_52589__$1);goog.dom.classes.set(node_52595,classes_52578__$1);
{
var G__52596 = cljs.core.next.call(null,seq__52574_52589__$1);
var G__52597 = null;
var G__52598 = (0);
var G__52599 = (0);
seq__52574_52579 = G__52596;
chunk__52575_52580 = G__52597;
count__52576_52581 = G__52598;
i__52577_52582 = G__52599;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__52604_52608 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52605_52609 = null;var count__52606_52610 = (0);var i__52607_52611 = (0);while(true){
if((i__52607_52611 < count__52606_52610))
{var node_52612 = cljs.core._nth.call(null,chunk__52605_52609,i__52607_52611);goog.dom.setTextContent(node_52612,value);
{
var G__52613 = seq__52604_52608;
var G__52614 = chunk__52605_52609;
var G__52615 = count__52606_52610;
var G__52616 = (i__52607_52611 + (1));
seq__52604_52608 = G__52613;
chunk__52605_52609 = G__52614;
count__52606_52610 = G__52615;
i__52607_52611 = G__52616;
continue;
}
} else
{var temp__4126__auto___52617 = cljs.core.seq.call(null,seq__52604_52608);if(temp__4126__auto___52617)
{var seq__52604_52618__$1 = temp__4126__auto___52617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52604_52618__$1))
{var c__4299__auto___52619 = cljs.core.chunk_first.call(null,seq__52604_52618__$1);{
var G__52620 = cljs.core.chunk_rest.call(null,seq__52604_52618__$1);
var G__52621 = c__4299__auto___52619;
var G__52622 = cljs.core.count.call(null,c__4299__auto___52619);
var G__52623 = (0);
seq__52604_52608 = G__52620;
chunk__52605_52609 = G__52621;
count__52606_52610 = G__52622;
i__52607_52611 = G__52623;
continue;
}
} else
{var node_52624 = cljs.core.first.call(null,seq__52604_52618__$1);goog.dom.setTextContent(node_52624,value);
{
var G__52625 = cljs.core.next.call(null,seq__52604_52618__$1);
var G__52626 = null;
var G__52627 = (0);
var G__52628 = (0);
seq__52604_52608 = G__52625;
chunk__52605_52609 = G__52626;
count__52606_52610 = G__52627;
i__52607_52611 = G__52628;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__52633_52637 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52634_52638 = null;var count__52635_52639 = (0);var i__52636_52640 = (0);while(true){
if((i__52636_52640 < count__52635_52639))
{var node_52641 = cljs.core._nth.call(null,chunk__52634_52638,i__52636_52640);goog.dom.forms.setValue(node_52641,value);
{
var G__52642 = seq__52633_52637;
var G__52643 = chunk__52634_52638;
var G__52644 = count__52635_52639;
var G__52645 = (i__52636_52640 + (1));
seq__52633_52637 = G__52642;
chunk__52634_52638 = G__52643;
count__52635_52639 = G__52644;
i__52636_52640 = G__52645;
continue;
}
} else
{var temp__4126__auto___52646 = cljs.core.seq.call(null,seq__52633_52637);if(temp__4126__auto___52646)
{var seq__52633_52647__$1 = temp__4126__auto___52646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52633_52647__$1))
{var c__4299__auto___52648 = cljs.core.chunk_first.call(null,seq__52633_52647__$1);{
var G__52649 = cljs.core.chunk_rest.call(null,seq__52633_52647__$1);
var G__52650 = c__4299__auto___52648;
var G__52651 = cljs.core.count.call(null,c__4299__auto___52648);
var G__52652 = (0);
seq__52633_52637 = G__52649;
chunk__52634_52638 = G__52650;
count__52635_52639 = G__52651;
i__52636_52640 = G__52652;
continue;
}
} else
{var node_52653 = cljs.core.first.call(null,seq__52633_52647__$1);goog.dom.forms.setValue(node_52653,value);
{
var G__52654 = cljs.core.next.call(null,seq__52633_52647__$1);
var G__52655 = null;
var G__52656 = (0);
var G__52657 = (0);
seq__52633_52637 = G__52654;
chunk__52634_52638 = G__52655;
count__52635_52639 = G__52656;
i__52636_52640 = G__52657;
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
{var value_52668 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__52664_52669 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__52665_52670 = null;var count__52666_52671 = (0);var i__52667_52672 = (0);while(true){
if((i__52667_52672 < count__52666_52671))
{var node_52673 = cljs.core._nth.call(null,chunk__52665_52670,i__52667_52672);node_52673.innerHTML = value_52668;
{
var G__52674 = seq__52664_52669;
var G__52675 = chunk__52665_52670;
var G__52676 = count__52666_52671;
var G__52677 = (i__52667_52672 + (1));
seq__52664_52669 = G__52674;
chunk__52665_52670 = G__52675;
count__52666_52671 = G__52676;
i__52667_52672 = G__52677;
continue;
}
} else
{var temp__4126__auto___52678 = cljs.core.seq.call(null,seq__52664_52669);if(temp__4126__auto___52678)
{var seq__52664_52679__$1 = temp__4126__auto___52678;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52664_52679__$1))
{var c__4299__auto___52680 = cljs.core.chunk_first.call(null,seq__52664_52679__$1);{
var G__52681 = cljs.core.chunk_rest.call(null,seq__52664_52679__$1);
var G__52682 = c__4299__auto___52680;
var G__52683 = cljs.core.count.call(null,c__4299__auto___52680);
var G__52684 = (0);
seq__52664_52669 = G__52681;
chunk__52665_52670 = G__52682;
count__52666_52671 = G__52683;
i__52667_52672 = G__52684;
continue;
}
} else
{var node_52685 = cljs.core.first.call(null,seq__52664_52679__$1);node_52685.innerHTML = value_52668;
{
var G__52686 = cljs.core.next.call(null,seq__52664_52679__$1);
var G__52687 = null;
var G__52688 = (0);
var G__52689 = (0);
seq__52664_52669 = G__52686;
chunk__52665_52670 = G__52687;
count__52666_52671 = G__52688;
i__52667_52672 = G__52689;
continue;
}
}
} else
{}
}
break;
}
}catch (e52663){if((e52663 instanceof Error))
{var e_52690 = e52663;domina.replace_children_BANG_.call(null,content,value_52668);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52663;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__52697_52701 = cljs.core.seq.call(null,children);var chunk__52698_52702 = null;var count__52699_52703 = (0);var i__52700_52704 = (0);while(true){
if((i__52700_52704 < count__52699_52703))
{var child_52705 = cljs.core._nth.call(null,chunk__52698_52702,i__52700_52704);frag.appendChild(child_52705);
{
var G__52706 = seq__52697_52701;
var G__52707 = chunk__52698_52702;
var G__52708 = count__52699_52703;
var G__52709 = (i__52700_52704 + (1));
seq__52697_52701 = G__52706;
chunk__52698_52702 = G__52707;
count__52699_52703 = G__52708;
i__52700_52704 = G__52709;
continue;
}
} else
{var temp__4126__auto___52710 = cljs.core.seq.call(null,seq__52697_52701);if(temp__4126__auto___52710)
{var seq__52697_52711__$1 = temp__4126__auto___52710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52697_52711__$1))
{var c__4299__auto___52712 = cljs.core.chunk_first.call(null,seq__52697_52711__$1);{
var G__52713 = cljs.core.chunk_rest.call(null,seq__52697_52711__$1);
var G__52714 = c__4299__auto___52712;
var G__52715 = cljs.core.count.call(null,c__4299__auto___52712);
var G__52716 = (0);
seq__52697_52701 = G__52713;
chunk__52698_52702 = G__52714;
count__52699_52703 = G__52715;
i__52700_52704 = G__52716;
continue;
}
} else
{var child_52717 = cljs.core.first.call(null,seq__52697_52711__$1);frag.appendChild(child_52717);
{
var G__52718 = cljs.core.next.call(null,seq__52697_52711__$1);
var G__52719 = null;
var G__52720 = (0);
var G__52721 = (0);
seq__52697_52701 = G__52718;
chunk__52698_52702 = G__52719;
count__52699_52703 = G__52720;
i__52700_52704 = G__52721;
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
return (function (p1__52691_SHARP_,p2__52692_SHARP_){return f.call(null,p1__52691_SHARP_,p2__52692_SHARP_);
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
{if((function (){var G__52723 = list_thing;if(G__52723)
{var bit__4193__auto__ = (G__52723.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__52723.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52723.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52723);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52723);
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
{if((function (){var G__52724 = content;if(G__52724)
{var bit__4193__auto__ = (G__52724.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__52724.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52724.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52724);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52724);
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
{if((function (){var G__52725 = content;if(G__52725)
{var bit__4193__auto__ = (G__52725.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__52725.cljs$core$ISeqable$))
{return true;
} else
{if((!G__52725.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52725);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__52725);
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