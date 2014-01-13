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
var opt_wrapper_24279 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_24280 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_24281 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$116,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_24280,table_section_wrapper_24280,opt_wrapper_24279,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_24281,table_section_wrapper_24280,cell_wrapper_24281,opt_wrapper_24279,table_section_wrapper_24280,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_24280]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__24286 = cljs.core.seq(tbody);var chunk__24287 = null;var count__24288 = 0;var i__24289 = 0;while(true){
if((i__24289 < count__24288))
{var child = chunk__24287.cljs$core$IIndexed$_nth$arity$2(null,i__24289);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24290 = seq__24286;
var G__24291 = chunk__24287;
var G__24292 = count__24288;
var G__24293 = (i__24289 + 1);
seq__24286 = G__24290;
chunk__24287 = G__24291;
count__24288 = G__24292;
i__24289 = G__24293;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__24286);if(temp__4092__auto__)
{var seq__24286__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__24286__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__24286__$1);{
var G__24294 = cljs.core.chunk_rest(seq__24286__$1);
var G__24295 = c__4148__auto__;
var G__24296 = cljs.core.count(c__4148__auto__);
var G__24297 = 0;
seq__24286 = G__24294;
chunk__24287 = G__24295;
count__24288 = G__24296;
i__24289 = G__24297;
continue;
}
} else
{var child = cljs.core.first(seq__24286__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24298 = cljs.core.next(seq__24286__$1);
var G__24299 = null;
var G__24300 = 0;
var G__24301 = 0;
seq__24286 = G__24298;
chunk__24287 = G__24299;
count__24288 = G__24300;
i__24289 = G__24301;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__24303 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24303,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__24304 = wrapper.lastChild;
var G__24305 = (level - 1);
wrapper = G__24304;
level = G__24305;
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
domina.DomContent = (function (){var obj24307 = {};return obj24307;
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
log_debug.cljs$lang$applyTo = (function (arglist__24308){
var mesg = cljs.core.seq(arglist__24308);
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
log.cljs$lang$applyTo = (function (arglist__24309){
var mesg = cljs.core.seq(arglist__24309);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__24310){
var contents = cljs.core.seq(arglist__24310);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24311_SHARP_){return p1__24311_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24312_SHARP_,p2__24313_SHARP_){return goog.dom.insertChildAt(p1__24312_SHARP_,p2__24313_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__24312_SHARP_,p2__24313_SHARP_){return goog.dom.insertChildAt(p1__24312_SHARP_,p2__24313_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24315_SHARP_,p2__24314_SHARP_){return goog.dom.insertSiblingBefore(p2__24314_SHARP_,p1__24315_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24315_SHARP_,p2__24314_SHARP_){return goog.dom.insertSiblingBefore(p2__24314_SHARP_,p1__24315_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24317_SHARP_,p2__24316_SHARP_){return goog.dom.insertSiblingAfter(p2__24316_SHARP_,p1__24317_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24317_SHARP_,p2__24316_SHARP_){return goog.dom.insertSiblingAfter(p2__24316_SHARP_,p1__24317_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__24319_SHARP_,p2__24318_SHARP_){return goog.dom.replaceNode(p2__24318_SHARP_,p1__24319_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__24319_SHARP_,p2__24318_SHARP_){return goog.dom.replaceNode(p2__24318_SHARP_,p1__24319_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__24324_24328 = cljs.core.seq(domina.nodes(content));var chunk__24325_24329 = null;var count__24326_24330 = 0;var i__24327_24331 = 0;while(true){
if((i__24327_24331 < count__24326_24330))
{var n_24332 = chunk__24325_24329.cljs$core$IIndexed$_nth$arity$2(null,i__24327_24331);goog.style.setStyle(n_24332,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24333 = seq__24324_24328;
var G__24334 = chunk__24325_24329;
var G__24335 = count__24326_24330;
var G__24336 = (i__24327_24331 + 1);
seq__24324_24328 = G__24333;
chunk__24325_24329 = G__24334;
count__24326_24330 = G__24335;
i__24327_24331 = G__24336;
continue;
}
} else
{var temp__4092__auto___24337 = cljs.core.seq(seq__24324_24328);if(temp__4092__auto___24337)
{var seq__24324_24338__$1 = temp__4092__auto___24337;if(cljs.core.chunked_seq_QMARK_(seq__24324_24338__$1))
{var c__4148__auto___24339 = cljs.core.chunk_first(seq__24324_24338__$1);{
var G__24340 = cljs.core.chunk_rest(seq__24324_24338__$1);
var G__24341 = c__4148__auto___24339;
var G__24342 = cljs.core.count(c__4148__auto___24339);
var G__24343 = 0;
seq__24324_24328 = G__24340;
chunk__24325_24329 = G__24341;
count__24326_24330 = G__24342;
i__24327_24331 = G__24343;
continue;
}
} else
{var n_24344 = cljs.core.first(seq__24324_24338__$1);goog.style.setStyle(n_24344,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24345 = cljs.core.next(seq__24324_24338__$1);
var G__24346 = null;
var G__24347 = 0;
var G__24348 = 0;
seq__24324_24328 = G__24345;
chunk__24325_24329 = G__24346;
count__24326_24330 = G__24347;
i__24327_24331 = G__24348;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24349){
var content = cljs.core.first(arglist__24349);
arglist__24349 = cljs.core.next(arglist__24349);
var name = cljs.core.first(arglist__24349);
var value = cljs.core.rest(arglist__24349);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__24354_24358 = cljs.core.seq(domina.nodes(content));var chunk__24355_24359 = null;var count__24356_24360 = 0;var i__24357_24361 = 0;while(true){
if((i__24357_24361 < count__24356_24360))
{var n_24362 = chunk__24355_24359.cljs$core$IIndexed$_nth$arity$2(null,i__24357_24361);n_24362.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24363 = seq__24354_24358;
var G__24364 = chunk__24355_24359;
var G__24365 = count__24356_24360;
var G__24366 = (i__24357_24361 + 1);
seq__24354_24358 = G__24363;
chunk__24355_24359 = G__24364;
count__24356_24360 = G__24365;
i__24357_24361 = G__24366;
continue;
}
} else
{var temp__4092__auto___24367 = cljs.core.seq(seq__24354_24358);if(temp__4092__auto___24367)
{var seq__24354_24368__$1 = temp__4092__auto___24367;if(cljs.core.chunked_seq_QMARK_(seq__24354_24368__$1))
{var c__4148__auto___24369 = cljs.core.chunk_first(seq__24354_24368__$1);{
var G__24370 = cljs.core.chunk_rest(seq__24354_24368__$1);
var G__24371 = c__4148__auto___24369;
var G__24372 = cljs.core.count(c__4148__auto___24369);
var G__24373 = 0;
seq__24354_24358 = G__24370;
chunk__24355_24359 = G__24371;
count__24356_24360 = G__24372;
i__24357_24361 = G__24373;
continue;
}
} else
{var n_24374 = cljs.core.first(seq__24354_24368__$1);n_24374.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__24375 = cljs.core.next(seq__24354_24368__$1);
var G__24376 = null;
var G__24377 = 0;
var G__24378 = 0;
seq__24354_24358 = G__24375;
chunk__24355_24359 = G__24376;
count__24356_24360 = G__24377;
i__24357_24361 = G__24378;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24379){
var content = cljs.core.first(arglist__24379);
arglist__24379 = cljs.core.next(arglist__24379);
var name = cljs.core.first(arglist__24379);
var value = cljs.core.rest(arglist__24379);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24384_24388 = cljs.core.seq(domina.nodes(content));var chunk__24385_24389 = null;var count__24386_24390 = 0;var i__24387_24391 = 0;while(true){
if((i__24387_24391 < count__24386_24390))
{var n_24392 = chunk__24385_24389.cljs$core$IIndexed$_nth$arity$2(null,i__24387_24391);n_24392.removeAttribute(cljs.core.name(name));
{
var G__24393 = seq__24384_24388;
var G__24394 = chunk__24385_24389;
var G__24395 = count__24386_24390;
var G__24396 = (i__24387_24391 + 1);
seq__24384_24388 = G__24393;
chunk__24385_24389 = G__24394;
count__24386_24390 = G__24395;
i__24387_24391 = G__24396;
continue;
}
} else
{var temp__4092__auto___24397 = cljs.core.seq(seq__24384_24388);if(temp__4092__auto___24397)
{var seq__24384_24398__$1 = temp__4092__auto___24397;if(cljs.core.chunked_seq_QMARK_(seq__24384_24398__$1))
{var c__4148__auto___24399 = cljs.core.chunk_first(seq__24384_24398__$1);{
var G__24400 = cljs.core.chunk_rest(seq__24384_24398__$1);
var G__24401 = c__4148__auto___24399;
var G__24402 = cljs.core.count(c__4148__auto___24399);
var G__24403 = 0;
seq__24384_24388 = G__24400;
chunk__24385_24389 = G__24401;
count__24386_24390 = G__24402;
i__24387_24391 = G__24403;
continue;
}
} else
{var n_24404 = cljs.core.first(seq__24384_24398__$1);n_24404.removeAttribute(cljs.core.name(name));
{
var G__24405 = cljs.core.next(seq__24384_24398__$1);
var G__24406 = null;
var G__24407 = 0;
var G__24408 = 0;
seq__24384_24388 = G__24405;
chunk__24385_24389 = G__24406;
count__24386_24390 = G__24407;
i__24387_24391 = G__24408;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__24410 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24410,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24410,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$115)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24411_SHARP_){var attr = attrs__$1.item(p1__24411_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24418_24424 = cljs.core.seq(styles);var chunk__24419_24425 = null;var count__24420_24426 = 0;var i__24421_24427 = 0;while(true){
if((i__24421_24427 < count__24420_24426))
{var vec__24422_24428 = chunk__24419_24425.cljs$core$IIndexed$_nth$arity$2(null,i__24421_24427);var name_24429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24422_24428,0,null);var value_24430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24422_24428,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24429,cljs.core.array_seq([value_24430], 0));
{
var G__24431 = seq__24418_24424;
var G__24432 = chunk__24419_24425;
var G__24433 = count__24420_24426;
var G__24434 = (i__24421_24427 + 1);
seq__24418_24424 = G__24431;
chunk__24419_24425 = G__24432;
count__24420_24426 = G__24433;
i__24421_24427 = G__24434;
continue;
}
} else
{var temp__4092__auto___24435 = cljs.core.seq(seq__24418_24424);if(temp__4092__auto___24435)
{var seq__24418_24436__$1 = temp__4092__auto___24435;if(cljs.core.chunked_seq_QMARK_(seq__24418_24436__$1))
{var c__4148__auto___24437 = cljs.core.chunk_first(seq__24418_24436__$1);{
var G__24438 = cljs.core.chunk_rest(seq__24418_24436__$1);
var G__24439 = c__4148__auto___24437;
var G__24440 = cljs.core.count(c__4148__auto___24437);
var G__24441 = 0;
seq__24418_24424 = G__24438;
chunk__24419_24425 = G__24439;
count__24420_24426 = G__24440;
i__24421_24427 = G__24441;
continue;
}
} else
{var vec__24423_24442 = cljs.core.first(seq__24418_24436__$1);var name_24443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24423_24442,0,null);var value_24444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24423_24442,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24443,cljs.core.array_seq([value_24444], 0));
{
var G__24445 = cljs.core.next(seq__24418_24436__$1);
var G__24446 = null;
var G__24447 = 0;
var G__24448 = 0;
seq__24418_24424 = G__24445;
chunk__24419_24425 = G__24446;
count__24420_24426 = G__24447;
i__24421_24427 = G__24448;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24455_24461 = cljs.core.seq(attrs);var chunk__24456_24462 = null;var count__24457_24463 = 0;var i__24458_24464 = 0;while(true){
if((i__24458_24464 < count__24457_24463))
{var vec__24459_24465 = chunk__24456_24462.cljs$core$IIndexed$_nth$arity$2(null,i__24458_24464);var name_24466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24459_24465,0,null);var value_24467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24459_24465,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24466,cljs.core.array_seq([value_24467], 0));
{
var G__24468 = seq__24455_24461;
var G__24469 = chunk__24456_24462;
var G__24470 = count__24457_24463;
var G__24471 = (i__24458_24464 + 1);
seq__24455_24461 = G__24468;
chunk__24456_24462 = G__24469;
count__24457_24463 = G__24470;
i__24458_24464 = G__24471;
continue;
}
} else
{var temp__4092__auto___24472 = cljs.core.seq(seq__24455_24461);if(temp__4092__auto___24472)
{var seq__24455_24473__$1 = temp__4092__auto___24472;if(cljs.core.chunked_seq_QMARK_(seq__24455_24473__$1))
{var c__4148__auto___24474 = cljs.core.chunk_first(seq__24455_24473__$1);{
var G__24475 = cljs.core.chunk_rest(seq__24455_24473__$1);
var G__24476 = c__4148__auto___24474;
var G__24477 = cljs.core.count(c__4148__auto___24474);
var G__24478 = 0;
seq__24455_24461 = G__24475;
chunk__24456_24462 = G__24476;
count__24457_24463 = G__24477;
i__24458_24464 = G__24478;
continue;
}
} else
{var vec__24460_24479 = cljs.core.first(seq__24455_24473__$1);var name_24480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460_24479,0,null);var value_24481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24460_24479,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24480,cljs.core.array_seq([value_24481], 0));
{
var G__24482 = cljs.core.next(seq__24455_24473__$1);
var G__24483 = null;
var G__24484 = 0;
var G__24485 = 0;
seq__24455_24461 = G__24482;
chunk__24456_24462 = G__24483;
count__24457_24463 = G__24484;
i__24458_24464 = G__24485;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24490_24494 = cljs.core.seq(domina.nodes(content));var chunk__24491_24495 = null;var count__24492_24496 = 0;var i__24493_24497 = 0;while(true){
if((i__24493_24497 < count__24492_24496))
{var node_24498 = chunk__24491_24495.cljs$core$IIndexed$_nth$arity$2(null,i__24493_24497);goog.dom.classes.add(node_24498,class$);
{
var G__24499 = seq__24490_24494;
var G__24500 = chunk__24491_24495;
var G__24501 = count__24492_24496;
var G__24502 = (i__24493_24497 + 1);
seq__24490_24494 = G__24499;
chunk__24491_24495 = G__24500;
count__24492_24496 = G__24501;
i__24493_24497 = G__24502;
continue;
}
} else
{var temp__4092__auto___24503 = cljs.core.seq(seq__24490_24494);if(temp__4092__auto___24503)
{var seq__24490_24504__$1 = temp__4092__auto___24503;if(cljs.core.chunked_seq_QMARK_(seq__24490_24504__$1))
{var c__4148__auto___24505 = cljs.core.chunk_first(seq__24490_24504__$1);{
var G__24506 = cljs.core.chunk_rest(seq__24490_24504__$1);
var G__24507 = c__4148__auto___24505;
var G__24508 = cljs.core.count(c__4148__auto___24505);
var G__24509 = 0;
seq__24490_24494 = G__24506;
chunk__24491_24495 = G__24507;
count__24492_24496 = G__24508;
i__24493_24497 = G__24509;
continue;
}
} else
{var node_24510 = cljs.core.first(seq__24490_24504__$1);goog.dom.classes.add(node_24510,class$);
{
var G__24511 = cljs.core.next(seq__24490_24504__$1);
var G__24512 = null;
var G__24513 = 0;
var G__24514 = 0;
seq__24490_24494 = G__24511;
chunk__24491_24495 = G__24512;
count__24492_24496 = G__24513;
i__24493_24497 = G__24514;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24519_24523 = cljs.core.seq(domina.nodes(content));var chunk__24520_24524 = null;var count__24521_24525 = 0;var i__24522_24526 = 0;while(true){
if((i__24522_24526 < count__24521_24525))
{var node_24527 = chunk__24520_24524.cljs$core$IIndexed$_nth$arity$2(null,i__24522_24526);goog.dom.classes.remove(node_24527,class$);
{
var G__24528 = seq__24519_24523;
var G__24529 = chunk__24520_24524;
var G__24530 = count__24521_24525;
var G__24531 = (i__24522_24526 + 1);
seq__24519_24523 = G__24528;
chunk__24520_24524 = G__24529;
count__24521_24525 = G__24530;
i__24522_24526 = G__24531;
continue;
}
} else
{var temp__4092__auto___24532 = cljs.core.seq(seq__24519_24523);if(temp__4092__auto___24532)
{var seq__24519_24533__$1 = temp__4092__auto___24532;if(cljs.core.chunked_seq_QMARK_(seq__24519_24533__$1))
{var c__4148__auto___24534 = cljs.core.chunk_first(seq__24519_24533__$1);{
var G__24535 = cljs.core.chunk_rest(seq__24519_24533__$1);
var G__24536 = c__4148__auto___24534;
var G__24537 = cljs.core.count(c__4148__auto___24534);
var G__24538 = 0;
seq__24519_24523 = G__24535;
chunk__24520_24524 = G__24536;
count__24521_24525 = G__24537;
i__24522_24526 = G__24538;
continue;
}
} else
{var node_24539 = cljs.core.first(seq__24519_24533__$1);goog.dom.classes.remove(node_24539,class$);
{
var G__24540 = cljs.core.next(seq__24519_24533__$1);
var G__24541 = null;
var G__24542 = 0;
var G__24543 = 0;
seq__24519_24523 = G__24540;
chunk__24520_24524 = G__24541;
count__24521_24525 = G__24542;
i__24522_24526 = G__24543;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24548_24552 = cljs.core.seq(domina.nodes(content));var chunk__24549_24553 = null;var count__24550_24554 = 0;var i__24551_24555 = 0;while(true){
if((i__24551_24555 < count__24550_24554))
{var node_24556 = chunk__24549_24553.cljs$core$IIndexed$_nth$arity$2(null,i__24551_24555);goog.dom.classes.toggle(node_24556,class$);
{
var G__24557 = seq__24548_24552;
var G__24558 = chunk__24549_24553;
var G__24559 = count__24550_24554;
var G__24560 = (i__24551_24555 + 1);
seq__24548_24552 = G__24557;
chunk__24549_24553 = G__24558;
count__24550_24554 = G__24559;
i__24551_24555 = G__24560;
continue;
}
} else
{var temp__4092__auto___24561 = cljs.core.seq(seq__24548_24552);if(temp__4092__auto___24561)
{var seq__24548_24562__$1 = temp__4092__auto___24561;if(cljs.core.chunked_seq_QMARK_(seq__24548_24562__$1))
{var c__4148__auto___24563 = cljs.core.chunk_first(seq__24548_24562__$1);{
var G__24564 = cljs.core.chunk_rest(seq__24548_24562__$1);
var G__24565 = c__4148__auto___24563;
var G__24566 = cljs.core.count(c__4148__auto___24563);
var G__24567 = 0;
seq__24548_24552 = G__24564;
chunk__24549_24553 = G__24565;
count__24550_24554 = G__24566;
i__24551_24555 = G__24567;
continue;
}
} else
{var node_24568 = cljs.core.first(seq__24548_24562__$1);goog.dom.classes.toggle(node_24568,class$);
{
var G__24569 = cljs.core.next(seq__24548_24562__$1);
var G__24570 = null;
var G__24571 = 0;
var G__24572 = 0;
seq__24548_24552 = G__24569;
chunk__24549_24553 = G__24570;
count__24550_24554 = G__24571;
i__24551_24555 = G__24572;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24581__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__24577_24582 = cljs.core.seq(domina.nodes(content));var chunk__24578_24583 = null;var count__24579_24584 = 0;var i__24580_24585 = 0;while(true){
if((i__24580_24585 < count__24579_24584))
{var node_24586 = chunk__24578_24583.cljs$core$IIndexed$_nth$arity$2(null,i__24580_24585);goog.dom.classes.set(node_24586,classes_24581__$1);
{
var G__24587 = seq__24577_24582;
var G__24588 = chunk__24578_24583;
var G__24589 = count__24579_24584;
var G__24590 = (i__24580_24585 + 1);
seq__24577_24582 = G__24587;
chunk__24578_24583 = G__24588;
count__24579_24584 = G__24589;
i__24580_24585 = G__24590;
continue;
}
} else
{var temp__4092__auto___24591 = cljs.core.seq(seq__24577_24582);if(temp__4092__auto___24591)
{var seq__24577_24592__$1 = temp__4092__auto___24591;if(cljs.core.chunked_seq_QMARK_(seq__24577_24592__$1))
{var c__4148__auto___24593 = cljs.core.chunk_first(seq__24577_24592__$1);{
var G__24594 = cljs.core.chunk_rest(seq__24577_24592__$1);
var G__24595 = c__4148__auto___24593;
var G__24596 = cljs.core.count(c__4148__auto___24593);
var G__24597 = 0;
seq__24577_24582 = G__24594;
chunk__24578_24583 = G__24595;
count__24579_24584 = G__24596;
i__24580_24585 = G__24597;
continue;
}
} else
{var node_24598 = cljs.core.first(seq__24577_24592__$1);goog.dom.classes.set(node_24598,classes_24581__$1);
{
var G__24599 = cljs.core.next(seq__24577_24592__$1);
var G__24600 = null;
var G__24601 = 0;
var G__24602 = 0;
seq__24577_24582 = G__24599;
chunk__24578_24583 = G__24600;
count__24579_24584 = G__24601;
i__24580_24585 = G__24602;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24607_24611 = cljs.core.seq(domina.nodes(content));var chunk__24608_24612 = null;var count__24609_24613 = 0;var i__24610_24614 = 0;while(true){
if((i__24610_24614 < count__24609_24613))
{var node_24615 = chunk__24608_24612.cljs$core$IIndexed$_nth$arity$2(null,i__24610_24614);goog.dom.setTextContent(node_24615,value);
{
var G__24616 = seq__24607_24611;
var G__24617 = chunk__24608_24612;
var G__24618 = count__24609_24613;
var G__24619 = (i__24610_24614 + 1);
seq__24607_24611 = G__24616;
chunk__24608_24612 = G__24617;
count__24609_24613 = G__24618;
i__24610_24614 = G__24619;
continue;
}
} else
{var temp__4092__auto___24620 = cljs.core.seq(seq__24607_24611);if(temp__4092__auto___24620)
{var seq__24607_24621__$1 = temp__4092__auto___24620;if(cljs.core.chunked_seq_QMARK_(seq__24607_24621__$1))
{var c__4148__auto___24622 = cljs.core.chunk_first(seq__24607_24621__$1);{
var G__24623 = cljs.core.chunk_rest(seq__24607_24621__$1);
var G__24624 = c__4148__auto___24622;
var G__24625 = cljs.core.count(c__4148__auto___24622);
var G__24626 = 0;
seq__24607_24611 = G__24623;
chunk__24608_24612 = G__24624;
count__24609_24613 = G__24625;
i__24610_24614 = G__24626;
continue;
}
} else
{var node_24627 = cljs.core.first(seq__24607_24621__$1);goog.dom.setTextContent(node_24627,value);
{
var G__24628 = cljs.core.next(seq__24607_24621__$1);
var G__24629 = null;
var G__24630 = 0;
var G__24631 = 0;
seq__24607_24611 = G__24628;
chunk__24608_24612 = G__24629;
count__24609_24613 = G__24630;
i__24610_24614 = G__24631;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24636_24640 = cljs.core.seq(domina.nodes(content));var chunk__24637_24641 = null;var count__24638_24642 = 0;var i__24639_24643 = 0;while(true){
if((i__24639_24643 < count__24638_24642))
{var node_24644 = chunk__24637_24641.cljs$core$IIndexed$_nth$arity$2(null,i__24639_24643);goog.dom.forms.setValue(node_24644,value);
{
var G__24645 = seq__24636_24640;
var G__24646 = chunk__24637_24641;
var G__24647 = count__24638_24642;
var G__24648 = (i__24639_24643 + 1);
seq__24636_24640 = G__24645;
chunk__24637_24641 = G__24646;
count__24638_24642 = G__24647;
i__24639_24643 = G__24648;
continue;
}
} else
{var temp__4092__auto___24649 = cljs.core.seq(seq__24636_24640);if(temp__4092__auto___24649)
{var seq__24636_24650__$1 = temp__4092__auto___24649;if(cljs.core.chunked_seq_QMARK_(seq__24636_24650__$1))
{var c__4148__auto___24651 = cljs.core.chunk_first(seq__24636_24650__$1);{
var G__24652 = cljs.core.chunk_rest(seq__24636_24650__$1);
var G__24653 = c__4148__auto___24651;
var G__24654 = cljs.core.count(c__4148__auto___24651);
var G__24655 = 0;
seq__24636_24640 = G__24652;
chunk__24637_24641 = G__24653;
count__24638_24642 = G__24654;
i__24639_24643 = G__24655;
continue;
}
} else
{var node_24656 = cljs.core.first(seq__24636_24650__$1);goog.dom.forms.setValue(node_24656,value);
{
var G__24657 = cljs.core.next(seq__24636_24650__$1);
var G__24658 = null;
var G__24659 = 0;
var G__24660 = 0;
seq__24636_24640 = G__24657;
chunk__24637_24641 = G__24658;
count__24638_24642 = G__24659;
i__24639_24643 = G__24660;
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
{var value_24671 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24667_24672 = cljs.core.seq(domina.nodes(content));var chunk__24668_24673 = null;var count__24669_24674 = 0;var i__24670_24675 = 0;while(true){
if((i__24670_24675 < count__24669_24674))
{var node_24676 = chunk__24668_24673.cljs$core$IIndexed$_nth$arity$2(null,i__24670_24675);node_24676.innerHTML = value_24671;
{
var G__24677 = seq__24667_24672;
var G__24678 = chunk__24668_24673;
var G__24679 = count__24669_24674;
var G__24680 = (i__24670_24675 + 1);
seq__24667_24672 = G__24677;
chunk__24668_24673 = G__24678;
count__24669_24674 = G__24679;
i__24670_24675 = G__24680;
continue;
}
} else
{var temp__4092__auto___24681 = cljs.core.seq(seq__24667_24672);if(temp__4092__auto___24681)
{var seq__24667_24682__$1 = temp__4092__auto___24681;if(cljs.core.chunked_seq_QMARK_(seq__24667_24682__$1))
{var c__4148__auto___24683 = cljs.core.chunk_first(seq__24667_24682__$1);{
var G__24684 = cljs.core.chunk_rest(seq__24667_24682__$1);
var G__24685 = c__4148__auto___24683;
var G__24686 = cljs.core.count(c__4148__auto___24683);
var G__24687 = 0;
seq__24667_24672 = G__24684;
chunk__24668_24673 = G__24685;
count__24669_24674 = G__24686;
i__24670_24675 = G__24687;
continue;
}
} else
{var node_24688 = cljs.core.first(seq__24667_24682__$1);node_24688.innerHTML = value_24671;
{
var G__24689 = cljs.core.next(seq__24667_24682__$1);
var G__24690 = null;
var G__24691 = 0;
var G__24692 = 0;
seq__24667_24672 = G__24689;
chunk__24668_24673 = G__24690;
count__24669_24674 = G__24691;
i__24670_24675 = G__24692;
continue;
}
}
} else
{}
}
break;
}
}catch (e24666){if((e24666 instanceof Error))
{var e_24693 = e24666;domina.replace_children_BANG_(content,value_24671);
} else
{if(cljs.core.constant$keyword$115)
{throw e24666;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24700_24704 = cljs.core.seq(children);var chunk__24701_24705 = null;var count__24702_24706 = 0;var i__24703_24707 = 0;while(true){
if((i__24703_24707 < count__24702_24706))
{var child_24708 = chunk__24701_24705.cljs$core$IIndexed$_nth$arity$2(null,i__24703_24707);frag.appendChild(child_24708);
{
var G__24709 = seq__24700_24704;
var G__24710 = chunk__24701_24705;
var G__24711 = count__24702_24706;
var G__24712 = (i__24703_24707 + 1);
seq__24700_24704 = G__24709;
chunk__24701_24705 = G__24710;
count__24702_24706 = G__24711;
i__24703_24707 = G__24712;
continue;
}
} else
{var temp__4092__auto___24713 = cljs.core.seq(seq__24700_24704);if(temp__4092__auto___24713)
{var seq__24700_24714__$1 = temp__4092__auto___24713;if(cljs.core.chunked_seq_QMARK_(seq__24700_24714__$1))
{var c__4148__auto___24715 = cljs.core.chunk_first(seq__24700_24714__$1);{
var G__24716 = cljs.core.chunk_rest(seq__24700_24714__$1);
var G__24717 = c__4148__auto___24715;
var G__24718 = cljs.core.count(c__4148__auto___24715);
var G__24719 = 0;
seq__24700_24704 = G__24716;
chunk__24701_24705 = G__24717;
count__24702_24706 = G__24718;
i__24703_24707 = G__24719;
continue;
}
} else
{var child_24720 = cljs.core.first(seq__24700_24714__$1);frag.appendChild(child_24720);
{
var G__24721 = cljs.core.next(seq__24700_24714__$1);
var G__24722 = null;
var G__24723 = 0;
var G__24724 = 0;
seq__24700_24704 = G__24721;
chunk__24701_24705 = G__24722;
count__24702_24706 = G__24723;
i__24703_24707 = G__24724;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__24694_SHARP_,p2__24695_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__24694_SHARP_,p2__24695_SHARP_) : f.call(null,p1__24694_SHARP_,p2__24695_SHARP_));
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
{if((function (){var G__24726 = list_thing;if(G__24726)
{var bit__4050__auto__ = (G__24726.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24726.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24726.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24726);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24726);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$116)
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
{if((function (){var G__24727 = content;if(G__24727)
{var bit__4050__auto__ = (G__24727.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24727.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24727.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24727);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24727);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$116)
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
{if((function (){var G__24728 = content;if(G__24728)
{var bit__4050__auto__ = (G__24728.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24728.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24728.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24728);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24728);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$116)
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
