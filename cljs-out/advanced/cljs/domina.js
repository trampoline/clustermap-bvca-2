// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_27359 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27360 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27361 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$223,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27360,table_section_wrapper_27360,opt_wrapper_27359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27361,table_section_wrapper_27360,cell_wrapper_27361,opt_wrapper_27359,table_section_wrapper_27360,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27360]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27366 = cljs.core.seq(tbody);var chunk__27367 = null;var count__27368 = 0;var i__27369 = 0;while(true){
if((i__27369 < count__27368))
{var child = chunk__27367.cljs$core$IIndexed$_nth$arity$2(null,i__27369);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27370 = seq__27366;
var G__27371 = chunk__27367;
var G__27372 = count__27368;
var G__27373 = (i__27369 + 1);
seq__27366 = G__27370;
chunk__27367 = G__27371;
count__27368 = G__27372;
i__27369 = G__27373;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27366);if(temp__4092__auto__)
{var seq__27366__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27366__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27366__$1);{
var G__27374 = cljs.core.chunk_rest(seq__27366__$1);
var G__27375 = c__4148__auto__;
var G__27376 = cljs.core.count(c__4148__auto__);
var G__27377 = 0;
seq__27366 = G__27374;
chunk__27367 = G__27375;
count__27368 = G__27376;
i__27369 = G__27377;
continue;
}
} else
{var child = cljs.core.first(seq__27366__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27378 = cljs.core.next(seq__27366__$1);
var G__27379 = null;
var G__27380 = 0;
var G__27381 = 0;
seq__27366 = G__27378;
chunk__27367 = G__27379;
count__27368 = G__27380;
i__27369 = G__27381;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27383 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$223.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27383,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27383,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27383,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27384 = wrapper.lastChild;
var G__27385 = (level - 1);
wrapper = G__27384;
level = G__27385;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj27387 = {};return obj27387;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__27388){
var mesg = cljs.core.seq(arglist__27388);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__27389){
var mesg = cljs.core.seq(arglist__27389);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__27390){
var contents = cljs.core.seq(arglist__27390);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27391_SHARP_){return p1__27391_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27392_SHARP_,p2__27393_SHARP_){return goog.dom.insertChildAt(p1__27392_SHARP_,p2__27393_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27392_SHARP_,p2__27393_SHARP_){return goog.dom.insertChildAt(p1__27392_SHARP_,p2__27393_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27395_SHARP_,p2__27394_SHARP_){return goog.dom.insertSiblingBefore(p2__27394_SHARP_,p1__27395_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27395_SHARP_,p2__27394_SHARP_){return goog.dom.insertSiblingBefore(p2__27394_SHARP_,p1__27395_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27397_SHARP_,p2__27396_SHARP_){return goog.dom.insertSiblingAfter(p2__27396_SHARP_,p1__27397_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27397_SHARP_,p2__27396_SHARP_){return goog.dom.insertSiblingAfter(p2__27396_SHARP_,p1__27397_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27399_SHARP_,p2__27398_SHARP_){return goog.dom.replaceNode(p2__27398_SHARP_,p1__27399_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27399_SHARP_,p2__27398_SHARP_){return goog.dom.replaceNode(p2__27398_SHARP_,p1__27399_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__27404_27408 = cljs.core.seq(domina.nodes(content));var chunk__27405_27409 = null;var count__27406_27410 = 0;var i__27407_27411 = 0;while(true){
if((i__27407_27411 < count__27406_27410))
{var n_27412 = chunk__27405_27409.cljs$core$IIndexed$_nth$arity$2(null,i__27407_27411);goog.style.setStyle(n_27412,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27413 = seq__27404_27408;
var G__27414 = chunk__27405_27409;
var G__27415 = count__27406_27410;
var G__27416 = (i__27407_27411 + 1);
seq__27404_27408 = G__27413;
chunk__27405_27409 = G__27414;
count__27406_27410 = G__27415;
i__27407_27411 = G__27416;
continue;
}
} else
{var temp__4092__auto___27417 = cljs.core.seq(seq__27404_27408);if(temp__4092__auto___27417)
{var seq__27404_27418__$1 = temp__4092__auto___27417;if(cljs.core.chunked_seq_QMARK_(seq__27404_27418__$1))
{var c__4148__auto___27419 = cljs.core.chunk_first(seq__27404_27418__$1);{
var G__27420 = cljs.core.chunk_rest(seq__27404_27418__$1);
var G__27421 = c__4148__auto___27419;
var G__27422 = cljs.core.count(c__4148__auto___27419);
var G__27423 = 0;
seq__27404_27408 = G__27420;
chunk__27405_27409 = G__27421;
count__27406_27410 = G__27422;
i__27407_27411 = G__27423;
continue;
}
} else
{var n_27424 = cljs.core.first(seq__27404_27418__$1);goog.style.setStyle(n_27424,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27425 = cljs.core.next(seq__27404_27418__$1);
var G__27426 = null;
var G__27427 = 0;
var G__27428 = 0;
seq__27404_27408 = G__27425;
chunk__27405_27409 = G__27426;
count__27406_27410 = G__27427;
i__27407_27411 = G__27428;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27429){
var content = cljs.core.first(arglist__27429);
arglist__27429 = cljs.core.next(arglist__27429);
var name = cljs.core.first(arglist__27429);
var value = cljs.core.rest(arglist__27429);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27434_27438 = cljs.core.seq(domina.nodes(content));var chunk__27435_27439 = null;var count__27436_27440 = 0;var i__27437_27441 = 0;while(true){
if((i__27437_27441 < count__27436_27440))
{var n_27442 = chunk__27435_27439.cljs$core$IIndexed$_nth$arity$2(null,i__27437_27441);n_27442.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27443 = seq__27434_27438;
var G__27444 = chunk__27435_27439;
var G__27445 = count__27436_27440;
var G__27446 = (i__27437_27441 + 1);
seq__27434_27438 = G__27443;
chunk__27435_27439 = G__27444;
count__27436_27440 = G__27445;
i__27437_27441 = G__27446;
continue;
}
} else
{var temp__4092__auto___27447 = cljs.core.seq(seq__27434_27438);if(temp__4092__auto___27447)
{var seq__27434_27448__$1 = temp__4092__auto___27447;if(cljs.core.chunked_seq_QMARK_(seq__27434_27448__$1))
{var c__4148__auto___27449 = cljs.core.chunk_first(seq__27434_27448__$1);{
var G__27450 = cljs.core.chunk_rest(seq__27434_27448__$1);
var G__27451 = c__4148__auto___27449;
var G__27452 = cljs.core.count(c__4148__auto___27449);
var G__27453 = 0;
seq__27434_27438 = G__27450;
chunk__27435_27439 = G__27451;
count__27436_27440 = G__27452;
i__27437_27441 = G__27453;
continue;
}
} else
{var n_27454 = cljs.core.first(seq__27434_27448__$1);n_27454.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27455 = cljs.core.next(seq__27434_27448__$1);
var G__27456 = null;
var G__27457 = 0;
var G__27458 = 0;
seq__27434_27438 = G__27455;
chunk__27435_27439 = G__27456;
count__27436_27440 = G__27457;
i__27437_27441 = G__27458;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27459){
var content = cljs.core.first(arglist__27459);
arglist__27459 = cljs.core.next(arglist__27459);
var name = cljs.core.first(arglist__27459);
var value = cljs.core.rest(arglist__27459);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27464_27468 = cljs.core.seq(domina.nodes(content));var chunk__27465_27469 = null;var count__27466_27470 = 0;var i__27467_27471 = 0;while(true){
if((i__27467_27471 < count__27466_27470))
{var n_27472 = chunk__27465_27469.cljs$core$IIndexed$_nth$arity$2(null,i__27467_27471);n_27472.removeAttribute(cljs.core.name(name));
{
var G__27473 = seq__27464_27468;
var G__27474 = chunk__27465_27469;
var G__27475 = count__27466_27470;
var G__27476 = (i__27467_27471 + 1);
seq__27464_27468 = G__27473;
chunk__27465_27469 = G__27474;
count__27466_27470 = G__27475;
i__27467_27471 = G__27476;
continue;
}
} else
{var temp__4092__auto___27477 = cljs.core.seq(seq__27464_27468);if(temp__4092__auto___27477)
{var seq__27464_27478__$1 = temp__4092__auto___27477;if(cljs.core.chunked_seq_QMARK_(seq__27464_27478__$1))
{var c__4148__auto___27479 = cljs.core.chunk_first(seq__27464_27478__$1);{
var G__27480 = cljs.core.chunk_rest(seq__27464_27478__$1);
var G__27481 = c__4148__auto___27479;
var G__27482 = cljs.core.count(c__4148__auto___27479);
var G__27483 = 0;
seq__27464_27468 = G__27480;
chunk__27465_27469 = G__27481;
count__27466_27470 = G__27482;
i__27467_27471 = G__27483;
continue;
}
} else
{var n_27484 = cljs.core.first(seq__27464_27478__$1);n_27484.removeAttribute(cljs.core.name(name));
{
var G__27485 = cljs.core.next(seq__27464_27478__$1);
var G__27486 = null;
var G__27487 = 0;
var G__27488 = 0;
seq__27464_27468 = G__27485;
chunk__27465_27469 = G__27486;
count__27466_27470 = G__27487;
i__27467_27471 = G__27488;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27490 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27490,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27490,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$222)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27491_SHARP_){var attr = attrs__$1.item(p1__27491_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27498_27504 = cljs.core.seq(styles);var chunk__27499_27505 = null;var count__27500_27506 = 0;var i__27501_27507 = 0;while(true){
if((i__27501_27507 < count__27500_27506))
{var vec__27502_27508 = chunk__27499_27505.cljs$core$IIndexed$_nth$arity$2(null,i__27501_27507);var name_27509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27502_27508,0,null);var value_27510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27502_27508,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27509,cljs.core.array_seq([value_27510], 0));
{
var G__27511 = seq__27498_27504;
var G__27512 = chunk__27499_27505;
var G__27513 = count__27500_27506;
var G__27514 = (i__27501_27507 + 1);
seq__27498_27504 = G__27511;
chunk__27499_27505 = G__27512;
count__27500_27506 = G__27513;
i__27501_27507 = G__27514;
continue;
}
} else
{var temp__4092__auto___27515 = cljs.core.seq(seq__27498_27504);if(temp__4092__auto___27515)
{var seq__27498_27516__$1 = temp__4092__auto___27515;if(cljs.core.chunked_seq_QMARK_(seq__27498_27516__$1))
{var c__4148__auto___27517 = cljs.core.chunk_first(seq__27498_27516__$1);{
var G__27518 = cljs.core.chunk_rest(seq__27498_27516__$1);
var G__27519 = c__4148__auto___27517;
var G__27520 = cljs.core.count(c__4148__auto___27517);
var G__27521 = 0;
seq__27498_27504 = G__27518;
chunk__27499_27505 = G__27519;
count__27500_27506 = G__27520;
i__27501_27507 = G__27521;
continue;
}
} else
{var vec__27503_27522 = cljs.core.first(seq__27498_27516__$1);var name_27523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27503_27522,0,null);var value_27524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27503_27522,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27523,cljs.core.array_seq([value_27524], 0));
{
var G__27525 = cljs.core.next(seq__27498_27516__$1);
var G__27526 = null;
var G__27527 = 0;
var G__27528 = 0;
seq__27498_27504 = G__27525;
chunk__27499_27505 = G__27526;
count__27500_27506 = G__27527;
i__27501_27507 = G__27528;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27535_27541 = cljs.core.seq(attrs);var chunk__27536_27542 = null;var count__27537_27543 = 0;var i__27538_27544 = 0;while(true){
if((i__27538_27544 < count__27537_27543))
{var vec__27539_27545 = chunk__27536_27542.cljs$core$IIndexed$_nth$arity$2(null,i__27538_27544);var name_27546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27539_27545,0,null);var value_27547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27539_27545,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27546,cljs.core.array_seq([value_27547], 0));
{
var G__27548 = seq__27535_27541;
var G__27549 = chunk__27536_27542;
var G__27550 = count__27537_27543;
var G__27551 = (i__27538_27544 + 1);
seq__27535_27541 = G__27548;
chunk__27536_27542 = G__27549;
count__27537_27543 = G__27550;
i__27538_27544 = G__27551;
continue;
}
} else
{var temp__4092__auto___27552 = cljs.core.seq(seq__27535_27541);if(temp__4092__auto___27552)
{var seq__27535_27553__$1 = temp__4092__auto___27552;if(cljs.core.chunked_seq_QMARK_(seq__27535_27553__$1))
{var c__4148__auto___27554 = cljs.core.chunk_first(seq__27535_27553__$1);{
var G__27555 = cljs.core.chunk_rest(seq__27535_27553__$1);
var G__27556 = c__4148__auto___27554;
var G__27557 = cljs.core.count(c__4148__auto___27554);
var G__27558 = 0;
seq__27535_27541 = G__27555;
chunk__27536_27542 = G__27556;
count__27537_27543 = G__27557;
i__27538_27544 = G__27558;
continue;
}
} else
{var vec__27540_27559 = cljs.core.first(seq__27535_27553__$1);var name_27560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27540_27559,0,null);var value_27561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27540_27559,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27560,cljs.core.array_seq([value_27561], 0));
{
var G__27562 = cljs.core.next(seq__27535_27553__$1);
var G__27563 = null;
var G__27564 = 0;
var G__27565 = 0;
seq__27535_27541 = G__27562;
chunk__27536_27542 = G__27563;
count__27537_27543 = G__27564;
i__27538_27544 = G__27565;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27570_27574 = cljs.core.seq(domina.nodes(content));var chunk__27571_27575 = null;var count__27572_27576 = 0;var i__27573_27577 = 0;while(true){
if((i__27573_27577 < count__27572_27576))
{var node_27578 = chunk__27571_27575.cljs$core$IIndexed$_nth$arity$2(null,i__27573_27577);goog.dom.classes.add(node_27578,class$);
{
var G__27579 = seq__27570_27574;
var G__27580 = chunk__27571_27575;
var G__27581 = count__27572_27576;
var G__27582 = (i__27573_27577 + 1);
seq__27570_27574 = G__27579;
chunk__27571_27575 = G__27580;
count__27572_27576 = G__27581;
i__27573_27577 = G__27582;
continue;
}
} else
{var temp__4092__auto___27583 = cljs.core.seq(seq__27570_27574);if(temp__4092__auto___27583)
{var seq__27570_27584__$1 = temp__4092__auto___27583;if(cljs.core.chunked_seq_QMARK_(seq__27570_27584__$1))
{var c__4148__auto___27585 = cljs.core.chunk_first(seq__27570_27584__$1);{
var G__27586 = cljs.core.chunk_rest(seq__27570_27584__$1);
var G__27587 = c__4148__auto___27585;
var G__27588 = cljs.core.count(c__4148__auto___27585);
var G__27589 = 0;
seq__27570_27574 = G__27586;
chunk__27571_27575 = G__27587;
count__27572_27576 = G__27588;
i__27573_27577 = G__27589;
continue;
}
} else
{var node_27590 = cljs.core.first(seq__27570_27584__$1);goog.dom.classes.add(node_27590,class$);
{
var G__27591 = cljs.core.next(seq__27570_27584__$1);
var G__27592 = null;
var G__27593 = 0;
var G__27594 = 0;
seq__27570_27574 = G__27591;
chunk__27571_27575 = G__27592;
count__27572_27576 = G__27593;
i__27573_27577 = G__27594;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27599_27603 = cljs.core.seq(domina.nodes(content));var chunk__27600_27604 = null;var count__27601_27605 = 0;var i__27602_27606 = 0;while(true){
if((i__27602_27606 < count__27601_27605))
{var node_27607 = chunk__27600_27604.cljs$core$IIndexed$_nth$arity$2(null,i__27602_27606);goog.dom.classes.remove(node_27607,class$);
{
var G__27608 = seq__27599_27603;
var G__27609 = chunk__27600_27604;
var G__27610 = count__27601_27605;
var G__27611 = (i__27602_27606 + 1);
seq__27599_27603 = G__27608;
chunk__27600_27604 = G__27609;
count__27601_27605 = G__27610;
i__27602_27606 = G__27611;
continue;
}
} else
{var temp__4092__auto___27612 = cljs.core.seq(seq__27599_27603);if(temp__4092__auto___27612)
{var seq__27599_27613__$1 = temp__4092__auto___27612;if(cljs.core.chunked_seq_QMARK_(seq__27599_27613__$1))
{var c__4148__auto___27614 = cljs.core.chunk_first(seq__27599_27613__$1);{
var G__27615 = cljs.core.chunk_rest(seq__27599_27613__$1);
var G__27616 = c__4148__auto___27614;
var G__27617 = cljs.core.count(c__4148__auto___27614);
var G__27618 = 0;
seq__27599_27603 = G__27615;
chunk__27600_27604 = G__27616;
count__27601_27605 = G__27617;
i__27602_27606 = G__27618;
continue;
}
} else
{var node_27619 = cljs.core.first(seq__27599_27613__$1);goog.dom.classes.remove(node_27619,class$);
{
var G__27620 = cljs.core.next(seq__27599_27613__$1);
var G__27621 = null;
var G__27622 = 0;
var G__27623 = 0;
seq__27599_27603 = G__27620;
chunk__27600_27604 = G__27621;
count__27601_27605 = G__27622;
i__27602_27606 = G__27623;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27628_27632 = cljs.core.seq(domina.nodes(content));var chunk__27629_27633 = null;var count__27630_27634 = 0;var i__27631_27635 = 0;while(true){
if((i__27631_27635 < count__27630_27634))
{var node_27636 = chunk__27629_27633.cljs$core$IIndexed$_nth$arity$2(null,i__27631_27635);goog.dom.classes.toggle(node_27636,class$);
{
var G__27637 = seq__27628_27632;
var G__27638 = chunk__27629_27633;
var G__27639 = count__27630_27634;
var G__27640 = (i__27631_27635 + 1);
seq__27628_27632 = G__27637;
chunk__27629_27633 = G__27638;
count__27630_27634 = G__27639;
i__27631_27635 = G__27640;
continue;
}
} else
{var temp__4092__auto___27641 = cljs.core.seq(seq__27628_27632);if(temp__4092__auto___27641)
{var seq__27628_27642__$1 = temp__4092__auto___27641;if(cljs.core.chunked_seq_QMARK_(seq__27628_27642__$1))
{var c__4148__auto___27643 = cljs.core.chunk_first(seq__27628_27642__$1);{
var G__27644 = cljs.core.chunk_rest(seq__27628_27642__$1);
var G__27645 = c__4148__auto___27643;
var G__27646 = cljs.core.count(c__4148__auto___27643);
var G__27647 = 0;
seq__27628_27632 = G__27644;
chunk__27629_27633 = G__27645;
count__27630_27634 = G__27646;
i__27631_27635 = G__27647;
continue;
}
} else
{var node_27648 = cljs.core.first(seq__27628_27642__$1);goog.dom.classes.toggle(node_27648,class$);
{
var G__27649 = cljs.core.next(seq__27628_27642__$1);
var G__27650 = null;
var G__27651 = 0;
var G__27652 = 0;
seq__27628_27632 = G__27649;
chunk__27629_27633 = G__27650;
count__27630_27634 = G__27651;
i__27631_27635 = G__27652;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27661__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27657_27662 = cljs.core.seq(domina.nodes(content));var chunk__27658_27663 = null;var count__27659_27664 = 0;var i__27660_27665 = 0;while(true){
if((i__27660_27665 < count__27659_27664))
{var node_27666 = chunk__27658_27663.cljs$core$IIndexed$_nth$arity$2(null,i__27660_27665);goog.dom.classes.set(node_27666,classes_27661__$1);
{
var G__27667 = seq__27657_27662;
var G__27668 = chunk__27658_27663;
var G__27669 = count__27659_27664;
var G__27670 = (i__27660_27665 + 1);
seq__27657_27662 = G__27667;
chunk__27658_27663 = G__27668;
count__27659_27664 = G__27669;
i__27660_27665 = G__27670;
continue;
}
} else
{var temp__4092__auto___27671 = cljs.core.seq(seq__27657_27662);if(temp__4092__auto___27671)
{var seq__27657_27672__$1 = temp__4092__auto___27671;if(cljs.core.chunked_seq_QMARK_(seq__27657_27672__$1))
{var c__4148__auto___27673 = cljs.core.chunk_first(seq__27657_27672__$1);{
var G__27674 = cljs.core.chunk_rest(seq__27657_27672__$1);
var G__27675 = c__4148__auto___27673;
var G__27676 = cljs.core.count(c__4148__auto___27673);
var G__27677 = 0;
seq__27657_27662 = G__27674;
chunk__27658_27663 = G__27675;
count__27659_27664 = G__27676;
i__27660_27665 = G__27677;
continue;
}
} else
{var node_27678 = cljs.core.first(seq__27657_27672__$1);goog.dom.classes.set(node_27678,classes_27661__$1);
{
var G__27679 = cljs.core.next(seq__27657_27672__$1);
var G__27680 = null;
var G__27681 = 0;
var G__27682 = 0;
seq__27657_27662 = G__27679;
chunk__27658_27663 = G__27680;
count__27659_27664 = G__27681;
i__27660_27665 = G__27682;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27687_27691 = cljs.core.seq(domina.nodes(content));var chunk__27688_27692 = null;var count__27689_27693 = 0;var i__27690_27694 = 0;while(true){
if((i__27690_27694 < count__27689_27693))
{var node_27695 = chunk__27688_27692.cljs$core$IIndexed$_nth$arity$2(null,i__27690_27694);goog.dom.setTextContent(node_27695,value);
{
var G__27696 = seq__27687_27691;
var G__27697 = chunk__27688_27692;
var G__27698 = count__27689_27693;
var G__27699 = (i__27690_27694 + 1);
seq__27687_27691 = G__27696;
chunk__27688_27692 = G__27697;
count__27689_27693 = G__27698;
i__27690_27694 = G__27699;
continue;
}
} else
{var temp__4092__auto___27700 = cljs.core.seq(seq__27687_27691);if(temp__4092__auto___27700)
{var seq__27687_27701__$1 = temp__4092__auto___27700;if(cljs.core.chunked_seq_QMARK_(seq__27687_27701__$1))
{var c__4148__auto___27702 = cljs.core.chunk_first(seq__27687_27701__$1);{
var G__27703 = cljs.core.chunk_rest(seq__27687_27701__$1);
var G__27704 = c__4148__auto___27702;
var G__27705 = cljs.core.count(c__4148__auto___27702);
var G__27706 = 0;
seq__27687_27691 = G__27703;
chunk__27688_27692 = G__27704;
count__27689_27693 = G__27705;
i__27690_27694 = G__27706;
continue;
}
} else
{var node_27707 = cljs.core.first(seq__27687_27701__$1);goog.dom.setTextContent(node_27707,value);
{
var G__27708 = cljs.core.next(seq__27687_27701__$1);
var G__27709 = null;
var G__27710 = 0;
var G__27711 = 0;
seq__27687_27691 = G__27708;
chunk__27688_27692 = G__27709;
count__27689_27693 = G__27710;
i__27690_27694 = G__27711;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27716_27720 = cljs.core.seq(domina.nodes(content));var chunk__27717_27721 = null;var count__27718_27722 = 0;var i__27719_27723 = 0;while(true){
if((i__27719_27723 < count__27718_27722))
{var node_27724 = chunk__27717_27721.cljs$core$IIndexed$_nth$arity$2(null,i__27719_27723);goog.dom.forms.setValue(node_27724,value);
{
var G__27725 = seq__27716_27720;
var G__27726 = chunk__27717_27721;
var G__27727 = count__27718_27722;
var G__27728 = (i__27719_27723 + 1);
seq__27716_27720 = G__27725;
chunk__27717_27721 = G__27726;
count__27718_27722 = G__27727;
i__27719_27723 = G__27728;
continue;
}
} else
{var temp__4092__auto___27729 = cljs.core.seq(seq__27716_27720);if(temp__4092__auto___27729)
{var seq__27716_27730__$1 = temp__4092__auto___27729;if(cljs.core.chunked_seq_QMARK_(seq__27716_27730__$1))
{var c__4148__auto___27731 = cljs.core.chunk_first(seq__27716_27730__$1);{
var G__27732 = cljs.core.chunk_rest(seq__27716_27730__$1);
var G__27733 = c__4148__auto___27731;
var G__27734 = cljs.core.count(c__4148__auto___27731);
var G__27735 = 0;
seq__27716_27720 = G__27732;
chunk__27717_27721 = G__27733;
count__27718_27722 = G__27734;
i__27719_27723 = G__27735;
continue;
}
} else
{var node_27736 = cljs.core.first(seq__27716_27730__$1);goog.dom.forms.setValue(node_27736,value);
{
var G__27737 = cljs.core.next(seq__27716_27730__$1);
var G__27738 = null;
var G__27739 = 0;
var G__27740 = 0;
seq__27716_27720 = G__27737;
chunk__27717_27721 = G__27738;
count__27718_27722 = G__27739;
i__27719_27723 = G__27740;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_27751 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27747_27752 = cljs.core.seq(domina.nodes(content));var chunk__27748_27753 = null;var count__27749_27754 = 0;var i__27750_27755 = 0;while(true){
if((i__27750_27755 < count__27749_27754))
{var node_27756 = chunk__27748_27753.cljs$core$IIndexed$_nth$arity$2(null,i__27750_27755);node_27756.innerHTML = value_27751;
{
var G__27757 = seq__27747_27752;
var G__27758 = chunk__27748_27753;
var G__27759 = count__27749_27754;
var G__27760 = (i__27750_27755 + 1);
seq__27747_27752 = G__27757;
chunk__27748_27753 = G__27758;
count__27749_27754 = G__27759;
i__27750_27755 = G__27760;
continue;
}
} else
{var temp__4092__auto___27761 = cljs.core.seq(seq__27747_27752);if(temp__4092__auto___27761)
{var seq__27747_27762__$1 = temp__4092__auto___27761;if(cljs.core.chunked_seq_QMARK_(seq__27747_27762__$1))
{var c__4148__auto___27763 = cljs.core.chunk_first(seq__27747_27762__$1);{
var G__27764 = cljs.core.chunk_rest(seq__27747_27762__$1);
var G__27765 = c__4148__auto___27763;
var G__27766 = cljs.core.count(c__4148__auto___27763);
var G__27767 = 0;
seq__27747_27752 = G__27764;
chunk__27748_27753 = G__27765;
count__27749_27754 = G__27766;
i__27750_27755 = G__27767;
continue;
}
} else
{var node_27768 = cljs.core.first(seq__27747_27762__$1);node_27768.innerHTML = value_27751;
{
var G__27769 = cljs.core.next(seq__27747_27762__$1);
var G__27770 = null;
var G__27771 = 0;
var G__27772 = 0;
seq__27747_27752 = G__27769;
chunk__27748_27753 = G__27770;
count__27749_27754 = G__27771;
i__27750_27755 = G__27772;
continue;
}
}
} else
{}
}
break;
}
}catch (e27746){if((e27746 instanceof Error))
{var e_27773 = e27746;domina.replace_children_BANG_(content,value_27751);
} else
{if(cljs.core.constant$keyword$222)
{throw e27746;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27780_27784 = cljs.core.seq(children);var chunk__27781_27785 = null;var count__27782_27786 = 0;var i__27783_27787 = 0;while(true){
if((i__27783_27787 < count__27782_27786))
{var child_27788 = chunk__27781_27785.cljs$core$IIndexed$_nth$arity$2(null,i__27783_27787);frag.appendChild(child_27788);
{
var G__27789 = seq__27780_27784;
var G__27790 = chunk__27781_27785;
var G__27791 = count__27782_27786;
var G__27792 = (i__27783_27787 + 1);
seq__27780_27784 = G__27789;
chunk__27781_27785 = G__27790;
count__27782_27786 = G__27791;
i__27783_27787 = G__27792;
continue;
}
} else
{var temp__4092__auto___27793 = cljs.core.seq(seq__27780_27784);if(temp__4092__auto___27793)
{var seq__27780_27794__$1 = temp__4092__auto___27793;if(cljs.core.chunked_seq_QMARK_(seq__27780_27794__$1))
{var c__4148__auto___27795 = cljs.core.chunk_first(seq__27780_27794__$1);{
var G__27796 = cljs.core.chunk_rest(seq__27780_27794__$1);
var G__27797 = c__4148__auto___27795;
var G__27798 = cljs.core.count(c__4148__auto___27795);
var G__27799 = 0;
seq__27780_27784 = G__27796;
chunk__27781_27785 = G__27797;
count__27782_27786 = G__27798;
i__27783_27787 = G__27799;
continue;
}
} else
{var child_27800 = cljs.core.first(seq__27780_27794__$1);frag.appendChild(child_27800);
{
var G__27801 = cljs.core.next(seq__27780_27794__$1);
var G__27802 = null;
var G__27803 = 0;
var G__27804 = 0;
seq__27780_27784 = G__27801;
chunk__27781_27785 = G__27802;
count__27782_27786 = G__27803;
i__27783_27787 = G__27804;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27774_SHARP_,p2__27775_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27774_SHARP_,p2__27775_SHARP_) : f.call(null,p1__27774_SHARP_,p2__27775_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__27806 = list_thing;if(G__27806)
{var bit__4050__auto__ = (G__27806.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27806.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27806.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27806);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27806);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$223)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__27807 = content;if(G__27807)
{var bit__4050__auto__ = (G__27807.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27807.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27807.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27807);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27807);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$223)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__27808 = content;if(G__27808)
{var bit__4050__auto__ = (G__27808.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27808.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27808.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27808);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27808);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$223)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
