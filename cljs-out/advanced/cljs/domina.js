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
var opt_wrapper_25327 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_25328 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_25329 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$116,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_25328,table_section_wrapper_25328,opt_wrapper_25327,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_25329,table_section_wrapper_25328,cell_wrapper_25329,opt_wrapper_25327,table_section_wrapper_25328,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_25328]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__25334 = cljs.core.seq(tbody);var chunk__25335 = null;var count__25336 = 0;var i__25337 = 0;while(true){
if((i__25337 < count__25336))
{var child = chunk__25335.cljs$core$IIndexed$_nth$arity$2(null,i__25337);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25338 = seq__25334;
var G__25339 = chunk__25335;
var G__25340 = count__25336;
var G__25341 = (i__25337 + 1);
seq__25334 = G__25338;
chunk__25335 = G__25339;
count__25336 = G__25340;
i__25337 = G__25341;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__25334);if(temp__4092__auto__)
{var seq__25334__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__25334__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__25334__$1);{
var G__25342 = cljs.core.chunk_rest(seq__25334__$1);
var G__25343 = c__4148__auto__;
var G__25344 = cljs.core.count(c__4148__auto__);
var G__25345 = 0;
seq__25334 = G__25342;
chunk__25335 = G__25343;
count__25336 = G__25344;
i__25337 = G__25345;
continue;
}
} else
{var child = cljs.core.first(seq__25334__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25346 = cljs.core.next(seq__25334__$1);
var G__25347 = null;
var G__25348 = 0;
var G__25349 = 0;
seq__25334 = G__25346;
chunk__25335 = G__25347;
count__25336 = G__25348;
i__25337 = G__25349;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__25351 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25351,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25351,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25351,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__25352 = wrapper.lastChild;
var G__25353 = (level - 1);
wrapper = G__25352;
level = G__25353;
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
domina.DomContent = (function (){var obj25355 = {};return obj25355;
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
log_debug.cljs$lang$applyTo = (function (arglist__25356){
var mesg = cljs.core.seq(arglist__25356);
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
log.cljs$lang$applyTo = (function (arglist__25357){
var mesg = cljs.core.seq(arglist__25357);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__25358){
var contents = cljs.core.seq(arglist__25358);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25359_SHARP_){return p1__25359_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25360_SHARP_,p2__25361_SHARP_){return goog.dom.insertChildAt(p1__25360_SHARP_,p2__25361_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__25360_SHARP_,p2__25361_SHARP_){return goog.dom.insertChildAt(p1__25360_SHARP_,p2__25361_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25363_SHARP_,p2__25362_SHARP_){return goog.dom.insertSiblingBefore(p2__25362_SHARP_,p1__25363_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25363_SHARP_,p2__25362_SHARP_){return goog.dom.insertSiblingBefore(p2__25362_SHARP_,p1__25363_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25365_SHARP_,p2__25364_SHARP_){return goog.dom.insertSiblingAfter(p2__25364_SHARP_,p1__25365_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25365_SHARP_,p2__25364_SHARP_){return goog.dom.insertSiblingAfter(p2__25364_SHARP_,p1__25365_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__25367_SHARP_,p2__25366_SHARP_){return goog.dom.replaceNode(p2__25366_SHARP_,p1__25367_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__25367_SHARP_,p2__25366_SHARP_){return goog.dom.replaceNode(p2__25366_SHARP_,p1__25367_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__25372_25376 = cljs.core.seq(domina.nodes(content));var chunk__25373_25377 = null;var count__25374_25378 = 0;var i__25375_25379 = 0;while(true){
if((i__25375_25379 < count__25374_25378))
{var n_25380 = chunk__25373_25377.cljs$core$IIndexed$_nth$arity$2(null,i__25375_25379);goog.style.setStyle(n_25380,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25381 = seq__25372_25376;
var G__25382 = chunk__25373_25377;
var G__25383 = count__25374_25378;
var G__25384 = (i__25375_25379 + 1);
seq__25372_25376 = G__25381;
chunk__25373_25377 = G__25382;
count__25374_25378 = G__25383;
i__25375_25379 = G__25384;
continue;
}
} else
{var temp__4092__auto___25385 = cljs.core.seq(seq__25372_25376);if(temp__4092__auto___25385)
{var seq__25372_25386__$1 = temp__4092__auto___25385;if(cljs.core.chunked_seq_QMARK_(seq__25372_25386__$1))
{var c__4148__auto___25387 = cljs.core.chunk_first(seq__25372_25386__$1);{
var G__25388 = cljs.core.chunk_rest(seq__25372_25386__$1);
var G__25389 = c__4148__auto___25387;
var G__25390 = cljs.core.count(c__4148__auto___25387);
var G__25391 = 0;
seq__25372_25376 = G__25388;
chunk__25373_25377 = G__25389;
count__25374_25378 = G__25390;
i__25375_25379 = G__25391;
continue;
}
} else
{var n_25392 = cljs.core.first(seq__25372_25386__$1);goog.style.setStyle(n_25392,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25393 = cljs.core.next(seq__25372_25386__$1);
var G__25394 = null;
var G__25395 = 0;
var G__25396 = 0;
seq__25372_25376 = G__25393;
chunk__25373_25377 = G__25394;
count__25374_25378 = G__25395;
i__25375_25379 = G__25396;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25397){
var content = cljs.core.first(arglist__25397);
arglist__25397 = cljs.core.next(arglist__25397);
var name = cljs.core.first(arglist__25397);
var value = cljs.core.rest(arglist__25397);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__25402_25406 = cljs.core.seq(domina.nodes(content));var chunk__25403_25407 = null;var count__25404_25408 = 0;var i__25405_25409 = 0;while(true){
if((i__25405_25409 < count__25404_25408))
{var n_25410 = chunk__25403_25407.cljs$core$IIndexed$_nth$arity$2(null,i__25405_25409);n_25410.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25411 = seq__25402_25406;
var G__25412 = chunk__25403_25407;
var G__25413 = count__25404_25408;
var G__25414 = (i__25405_25409 + 1);
seq__25402_25406 = G__25411;
chunk__25403_25407 = G__25412;
count__25404_25408 = G__25413;
i__25405_25409 = G__25414;
continue;
}
} else
{var temp__4092__auto___25415 = cljs.core.seq(seq__25402_25406);if(temp__4092__auto___25415)
{var seq__25402_25416__$1 = temp__4092__auto___25415;if(cljs.core.chunked_seq_QMARK_(seq__25402_25416__$1))
{var c__4148__auto___25417 = cljs.core.chunk_first(seq__25402_25416__$1);{
var G__25418 = cljs.core.chunk_rest(seq__25402_25416__$1);
var G__25419 = c__4148__auto___25417;
var G__25420 = cljs.core.count(c__4148__auto___25417);
var G__25421 = 0;
seq__25402_25406 = G__25418;
chunk__25403_25407 = G__25419;
count__25404_25408 = G__25420;
i__25405_25409 = G__25421;
continue;
}
} else
{var n_25422 = cljs.core.first(seq__25402_25416__$1);n_25422.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__25423 = cljs.core.next(seq__25402_25416__$1);
var G__25424 = null;
var G__25425 = 0;
var G__25426 = 0;
seq__25402_25406 = G__25423;
chunk__25403_25407 = G__25424;
count__25404_25408 = G__25425;
i__25405_25409 = G__25426;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__25427){
var content = cljs.core.first(arglist__25427);
arglist__25427 = cljs.core.next(arglist__25427);
var name = cljs.core.first(arglist__25427);
var value = cljs.core.rest(arglist__25427);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__25432_25436 = cljs.core.seq(domina.nodes(content));var chunk__25433_25437 = null;var count__25434_25438 = 0;var i__25435_25439 = 0;while(true){
if((i__25435_25439 < count__25434_25438))
{var n_25440 = chunk__25433_25437.cljs$core$IIndexed$_nth$arity$2(null,i__25435_25439);n_25440.removeAttribute(cljs.core.name(name));
{
var G__25441 = seq__25432_25436;
var G__25442 = chunk__25433_25437;
var G__25443 = count__25434_25438;
var G__25444 = (i__25435_25439 + 1);
seq__25432_25436 = G__25441;
chunk__25433_25437 = G__25442;
count__25434_25438 = G__25443;
i__25435_25439 = G__25444;
continue;
}
} else
{var temp__4092__auto___25445 = cljs.core.seq(seq__25432_25436);if(temp__4092__auto___25445)
{var seq__25432_25446__$1 = temp__4092__auto___25445;if(cljs.core.chunked_seq_QMARK_(seq__25432_25446__$1))
{var c__4148__auto___25447 = cljs.core.chunk_first(seq__25432_25446__$1);{
var G__25448 = cljs.core.chunk_rest(seq__25432_25446__$1);
var G__25449 = c__4148__auto___25447;
var G__25450 = cljs.core.count(c__4148__auto___25447);
var G__25451 = 0;
seq__25432_25436 = G__25448;
chunk__25433_25437 = G__25449;
count__25434_25438 = G__25450;
i__25435_25439 = G__25451;
continue;
}
} else
{var n_25452 = cljs.core.first(seq__25432_25446__$1);n_25452.removeAttribute(cljs.core.name(name));
{
var G__25453 = cljs.core.next(seq__25432_25446__$1);
var G__25454 = null;
var G__25455 = 0;
var G__25456 = 0;
seq__25432_25436 = G__25453;
chunk__25433_25437 = G__25454;
count__25434_25438 = G__25455;
i__25435_25439 = G__25456;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__25458 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25458,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25458,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25459_SHARP_){var attr = attrs__$1.item(p1__25459_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__25466_25472 = cljs.core.seq(styles);var chunk__25467_25473 = null;var count__25468_25474 = 0;var i__25469_25475 = 0;while(true){
if((i__25469_25475 < count__25468_25474))
{var vec__25470_25476 = chunk__25467_25473.cljs$core$IIndexed$_nth$arity$2(null,i__25469_25475);var name_25477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25470_25476,0,null);var value_25478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25470_25476,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25477,cljs.core.array_seq([value_25478], 0));
{
var G__25479 = seq__25466_25472;
var G__25480 = chunk__25467_25473;
var G__25481 = count__25468_25474;
var G__25482 = (i__25469_25475 + 1);
seq__25466_25472 = G__25479;
chunk__25467_25473 = G__25480;
count__25468_25474 = G__25481;
i__25469_25475 = G__25482;
continue;
}
} else
{var temp__4092__auto___25483 = cljs.core.seq(seq__25466_25472);if(temp__4092__auto___25483)
{var seq__25466_25484__$1 = temp__4092__auto___25483;if(cljs.core.chunked_seq_QMARK_(seq__25466_25484__$1))
{var c__4148__auto___25485 = cljs.core.chunk_first(seq__25466_25484__$1);{
var G__25486 = cljs.core.chunk_rest(seq__25466_25484__$1);
var G__25487 = c__4148__auto___25485;
var G__25488 = cljs.core.count(c__4148__auto___25485);
var G__25489 = 0;
seq__25466_25472 = G__25486;
chunk__25467_25473 = G__25487;
count__25468_25474 = G__25488;
i__25469_25475 = G__25489;
continue;
}
} else
{var vec__25471_25490 = cljs.core.first(seq__25466_25484__$1);var name_25491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25471_25490,0,null);var value_25492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25471_25490,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25491,cljs.core.array_seq([value_25492], 0));
{
var G__25493 = cljs.core.next(seq__25466_25484__$1);
var G__25494 = null;
var G__25495 = 0;
var G__25496 = 0;
seq__25466_25472 = G__25493;
chunk__25467_25473 = G__25494;
count__25468_25474 = G__25495;
i__25469_25475 = G__25496;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__25503_25509 = cljs.core.seq(attrs);var chunk__25504_25510 = null;var count__25505_25511 = 0;var i__25506_25512 = 0;while(true){
if((i__25506_25512 < count__25505_25511))
{var vec__25507_25513 = chunk__25504_25510.cljs$core$IIndexed$_nth$arity$2(null,i__25506_25512);var name_25514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25507_25513,0,null);var value_25515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25507_25513,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25514,cljs.core.array_seq([value_25515], 0));
{
var G__25516 = seq__25503_25509;
var G__25517 = chunk__25504_25510;
var G__25518 = count__25505_25511;
var G__25519 = (i__25506_25512 + 1);
seq__25503_25509 = G__25516;
chunk__25504_25510 = G__25517;
count__25505_25511 = G__25518;
i__25506_25512 = G__25519;
continue;
}
} else
{var temp__4092__auto___25520 = cljs.core.seq(seq__25503_25509);if(temp__4092__auto___25520)
{var seq__25503_25521__$1 = temp__4092__auto___25520;if(cljs.core.chunked_seq_QMARK_(seq__25503_25521__$1))
{var c__4148__auto___25522 = cljs.core.chunk_first(seq__25503_25521__$1);{
var G__25523 = cljs.core.chunk_rest(seq__25503_25521__$1);
var G__25524 = c__4148__auto___25522;
var G__25525 = cljs.core.count(c__4148__auto___25522);
var G__25526 = 0;
seq__25503_25509 = G__25523;
chunk__25504_25510 = G__25524;
count__25505_25511 = G__25525;
i__25506_25512 = G__25526;
continue;
}
} else
{var vec__25508_25527 = cljs.core.first(seq__25503_25521__$1);var name_25528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25508_25527,0,null);var value_25529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25508_25527,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_25528,cljs.core.array_seq([value_25529], 0));
{
var G__25530 = cljs.core.next(seq__25503_25521__$1);
var G__25531 = null;
var G__25532 = 0;
var G__25533 = 0;
seq__25503_25509 = G__25530;
chunk__25504_25510 = G__25531;
count__25505_25511 = G__25532;
i__25506_25512 = G__25533;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__25538_25542 = cljs.core.seq(domina.nodes(content));var chunk__25539_25543 = null;var count__25540_25544 = 0;var i__25541_25545 = 0;while(true){
if((i__25541_25545 < count__25540_25544))
{var node_25546 = chunk__25539_25543.cljs$core$IIndexed$_nth$arity$2(null,i__25541_25545);goog.dom.classes.add(node_25546,class$);
{
var G__25547 = seq__25538_25542;
var G__25548 = chunk__25539_25543;
var G__25549 = count__25540_25544;
var G__25550 = (i__25541_25545 + 1);
seq__25538_25542 = G__25547;
chunk__25539_25543 = G__25548;
count__25540_25544 = G__25549;
i__25541_25545 = G__25550;
continue;
}
} else
{var temp__4092__auto___25551 = cljs.core.seq(seq__25538_25542);if(temp__4092__auto___25551)
{var seq__25538_25552__$1 = temp__4092__auto___25551;if(cljs.core.chunked_seq_QMARK_(seq__25538_25552__$1))
{var c__4148__auto___25553 = cljs.core.chunk_first(seq__25538_25552__$1);{
var G__25554 = cljs.core.chunk_rest(seq__25538_25552__$1);
var G__25555 = c__4148__auto___25553;
var G__25556 = cljs.core.count(c__4148__auto___25553);
var G__25557 = 0;
seq__25538_25542 = G__25554;
chunk__25539_25543 = G__25555;
count__25540_25544 = G__25556;
i__25541_25545 = G__25557;
continue;
}
} else
{var node_25558 = cljs.core.first(seq__25538_25552__$1);goog.dom.classes.add(node_25558,class$);
{
var G__25559 = cljs.core.next(seq__25538_25552__$1);
var G__25560 = null;
var G__25561 = 0;
var G__25562 = 0;
seq__25538_25542 = G__25559;
chunk__25539_25543 = G__25560;
count__25540_25544 = G__25561;
i__25541_25545 = G__25562;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__25567_25571 = cljs.core.seq(domina.nodes(content));var chunk__25568_25572 = null;var count__25569_25573 = 0;var i__25570_25574 = 0;while(true){
if((i__25570_25574 < count__25569_25573))
{var node_25575 = chunk__25568_25572.cljs$core$IIndexed$_nth$arity$2(null,i__25570_25574);goog.dom.classes.remove(node_25575,class$);
{
var G__25576 = seq__25567_25571;
var G__25577 = chunk__25568_25572;
var G__25578 = count__25569_25573;
var G__25579 = (i__25570_25574 + 1);
seq__25567_25571 = G__25576;
chunk__25568_25572 = G__25577;
count__25569_25573 = G__25578;
i__25570_25574 = G__25579;
continue;
}
} else
{var temp__4092__auto___25580 = cljs.core.seq(seq__25567_25571);if(temp__4092__auto___25580)
{var seq__25567_25581__$1 = temp__4092__auto___25580;if(cljs.core.chunked_seq_QMARK_(seq__25567_25581__$1))
{var c__4148__auto___25582 = cljs.core.chunk_first(seq__25567_25581__$1);{
var G__25583 = cljs.core.chunk_rest(seq__25567_25581__$1);
var G__25584 = c__4148__auto___25582;
var G__25585 = cljs.core.count(c__4148__auto___25582);
var G__25586 = 0;
seq__25567_25571 = G__25583;
chunk__25568_25572 = G__25584;
count__25569_25573 = G__25585;
i__25570_25574 = G__25586;
continue;
}
} else
{var node_25587 = cljs.core.first(seq__25567_25581__$1);goog.dom.classes.remove(node_25587,class$);
{
var G__25588 = cljs.core.next(seq__25567_25581__$1);
var G__25589 = null;
var G__25590 = 0;
var G__25591 = 0;
seq__25567_25571 = G__25588;
chunk__25568_25572 = G__25589;
count__25569_25573 = G__25590;
i__25570_25574 = G__25591;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__25596_25600 = cljs.core.seq(domina.nodes(content));var chunk__25597_25601 = null;var count__25598_25602 = 0;var i__25599_25603 = 0;while(true){
if((i__25599_25603 < count__25598_25602))
{var node_25604 = chunk__25597_25601.cljs$core$IIndexed$_nth$arity$2(null,i__25599_25603);goog.dom.classes.toggle(node_25604,class$);
{
var G__25605 = seq__25596_25600;
var G__25606 = chunk__25597_25601;
var G__25607 = count__25598_25602;
var G__25608 = (i__25599_25603 + 1);
seq__25596_25600 = G__25605;
chunk__25597_25601 = G__25606;
count__25598_25602 = G__25607;
i__25599_25603 = G__25608;
continue;
}
} else
{var temp__4092__auto___25609 = cljs.core.seq(seq__25596_25600);if(temp__4092__auto___25609)
{var seq__25596_25610__$1 = temp__4092__auto___25609;if(cljs.core.chunked_seq_QMARK_(seq__25596_25610__$1))
{var c__4148__auto___25611 = cljs.core.chunk_first(seq__25596_25610__$1);{
var G__25612 = cljs.core.chunk_rest(seq__25596_25610__$1);
var G__25613 = c__4148__auto___25611;
var G__25614 = cljs.core.count(c__4148__auto___25611);
var G__25615 = 0;
seq__25596_25600 = G__25612;
chunk__25597_25601 = G__25613;
count__25598_25602 = G__25614;
i__25599_25603 = G__25615;
continue;
}
} else
{var node_25616 = cljs.core.first(seq__25596_25610__$1);goog.dom.classes.toggle(node_25616,class$);
{
var G__25617 = cljs.core.next(seq__25596_25610__$1);
var G__25618 = null;
var G__25619 = 0;
var G__25620 = 0;
seq__25596_25600 = G__25617;
chunk__25597_25601 = G__25618;
count__25598_25602 = G__25619;
i__25599_25603 = G__25620;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_25629__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__25625_25630 = cljs.core.seq(domina.nodes(content));var chunk__25626_25631 = null;var count__25627_25632 = 0;var i__25628_25633 = 0;while(true){
if((i__25628_25633 < count__25627_25632))
{var node_25634 = chunk__25626_25631.cljs$core$IIndexed$_nth$arity$2(null,i__25628_25633);goog.dom.classes.set(node_25634,classes_25629__$1);
{
var G__25635 = seq__25625_25630;
var G__25636 = chunk__25626_25631;
var G__25637 = count__25627_25632;
var G__25638 = (i__25628_25633 + 1);
seq__25625_25630 = G__25635;
chunk__25626_25631 = G__25636;
count__25627_25632 = G__25637;
i__25628_25633 = G__25638;
continue;
}
} else
{var temp__4092__auto___25639 = cljs.core.seq(seq__25625_25630);if(temp__4092__auto___25639)
{var seq__25625_25640__$1 = temp__4092__auto___25639;if(cljs.core.chunked_seq_QMARK_(seq__25625_25640__$1))
{var c__4148__auto___25641 = cljs.core.chunk_first(seq__25625_25640__$1);{
var G__25642 = cljs.core.chunk_rest(seq__25625_25640__$1);
var G__25643 = c__4148__auto___25641;
var G__25644 = cljs.core.count(c__4148__auto___25641);
var G__25645 = 0;
seq__25625_25630 = G__25642;
chunk__25626_25631 = G__25643;
count__25627_25632 = G__25644;
i__25628_25633 = G__25645;
continue;
}
} else
{var node_25646 = cljs.core.first(seq__25625_25640__$1);goog.dom.classes.set(node_25646,classes_25629__$1);
{
var G__25647 = cljs.core.next(seq__25625_25640__$1);
var G__25648 = null;
var G__25649 = 0;
var G__25650 = 0;
seq__25625_25630 = G__25647;
chunk__25626_25631 = G__25648;
count__25627_25632 = G__25649;
i__25628_25633 = G__25650;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__25655_25659 = cljs.core.seq(domina.nodes(content));var chunk__25656_25660 = null;var count__25657_25661 = 0;var i__25658_25662 = 0;while(true){
if((i__25658_25662 < count__25657_25661))
{var node_25663 = chunk__25656_25660.cljs$core$IIndexed$_nth$arity$2(null,i__25658_25662);goog.dom.setTextContent(node_25663,value);
{
var G__25664 = seq__25655_25659;
var G__25665 = chunk__25656_25660;
var G__25666 = count__25657_25661;
var G__25667 = (i__25658_25662 + 1);
seq__25655_25659 = G__25664;
chunk__25656_25660 = G__25665;
count__25657_25661 = G__25666;
i__25658_25662 = G__25667;
continue;
}
} else
{var temp__4092__auto___25668 = cljs.core.seq(seq__25655_25659);if(temp__4092__auto___25668)
{var seq__25655_25669__$1 = temp__4092__auto___25668;if(cljs.core.chunked_seq_QMARK_(seq__25655_25669__$1))
{var c__4148__auto___25670 = cljs.core.chunk_first(seq__25655_25669__$1);{
var G__25671 = cljs.core.chunk_rest(seq__25655_25669__$1);
var G__25672 = c__4148__auto___25670;
var G__25673 = cljs.core.count(c__4148__auto___25670);
var G__25674 = 0;
seq__25655_25659 = G__25671;
chunk__25656_25660 = G__25672;
count__25657_25661 = G__25673;
i__25658_25662 = G__25674;
continue;
}
} else
{var node_25675 = cljs.core.first(seq__25655_25669__$1);goog.dom.setTextContent(node_25675,value);
{
var G__25676 = cljs.core.next(seq__25655_25669__$1);
var G__25677 = null;
var G__25678 = 0;
var G__25679 = 0;
seq__25655_25659 = G__25676;
chunk__25656_25660 = G__25677;
count__25657_25661 = G__25678;
i__25658_25662 = G__25679;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__25684_25688 = cljs.core.seq(domina.nodes(content));var chunk__25685_25689 = null;var count__25686_25690 = 0;var i__25687_25691 = 0;while(true){
if((i__25687_25691 < count__25686_25690))
{var node_25692 = chunk__25685_25689.cljs$core$IIndexed$_nth$arity$2(null,i__25687_25691);goog.dom.forms.setValue(node_25692,value);
{
var G__25693 = seq__25684_25688;
var G__25694 = chunk__25685_25689;
var G__25695 = count__25686_25690;
var G__25696 = (i__25687_25691 + 1);
seq__25684_25688 = G__25693;
chunk__25685_25689 = G__25694;
count__25686_25690 = G__25695;
i__25687_25691 = G__25696;
continue;
}
} else
{var temp__4092__auto___25697 = cljs.core.seq(seq__25684_25688);if(temp__4092__auto___25697)
{var seq__25684_25698__$1 = temp__4092__auto___25697;if(cljs.core.chunked_seq_QMARK_(seq__25684_25698__$1))
{var c__4148__auto___25699 = cljs.core.chunk_first(seq__25684_25698__$1);{
var G__25700 = cljs.core.chunk_rest(seq__25684_25698__$1);
var G__25701 = c__4148__auto___25699;
var G__25702 = cljs.core.count(c__4148__auto___25699);
var G__25703 = 0;
seq__25684_25688 = G__25700;
chunk__25685_25689 = G__25701;
count__25686_25690 = G__25702;
i__25687_25691 = G__25703;
continue;
}
} else
{var node_25704 = cljs.core.first(seq__25684_25698__$1);goog.dom.forms.setValue(node_25704,value);
{
var G__25705 = cljs.core.next(seq__25684_25698__$1);
var G__25706 = null;
var G__25707 = 0;
var G__25708 = 0;
seq__25684_25688 = G__25705;
chunk__25685_25689 = G__25706;
count__25686_25690 = G__25707;
i__25687_25691 = G__25708;
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
{var value_25719 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__25715_25720 = cljs.core.seq(domina.nodes(content));var chunk__25716_25721 = null;var count__25717_25722 = 0;var i__25718_25723 = 0;while(true){
if((i__25718_25723 < count__25717_25722))
{var node_25724 = chunk__25716_25721.cljs$core$IIndexed$_nth$arity$2(null,i__25718_25723);node_25724.innerHTML = value_25719;
{
var G__25725 = seq__25715_25720;
var G__25726 = chunk__25716_25721;
var G__25727 = count__25717_25722;
var G__25728 = (i__25718_25723 + 1);
seq__25715_25720 = G__25725;
chunk__25716_25721 = G__25726;
count__25717_25722 = G__25727;
i__25718_25723 = G__25728;
continue;
}
} else
{var temp__4092__auto___25729 = cljs.core.seq(seq__25715_25720);if(temp__4092__auto___25729)
{var seq__25715_25730__$1 = temp__4092__auto___25729;if(cljs.core.chunked_seq_QMARK_(seq__25715_25730__$1))
{var c__4148__auto___25731 = cljs.core.chunk_first(seq__25715_25730__$1);{
var G__25732 = cljs.core.chunk_rest(seq__25715_25730__$1);
var G__25733 = c__4148__auto___25731;
var G__25734 = cljs.core.count(c__4148__auto___25731);
var G__25735 = 0;
seq__25715_25720 = G__25732;
chunk__25716_25721 = G__25733;
count__25717_25722 = G__25734;
i__25718_25723 = G__25735;
continue;
}
} else
{var node_25736 = cljs.core.first(seq__25715_25730__$1);node_25736.innerHTML = value_25719;
{
var G__25737 = cljs.core.next(seq__25715_25730__$1);
var G__25738 = null;
var G__25739 = 0;
var G__25740 = 0;
seq__25715_25720 = G__25737;
chunk__25716_25721 = G__25738;
count__25717_25722 = G__25739;
i__25718_25723 = G__25740;
continue;
}
}
} else
{}
}
break;
}
}catch (e25714){if((e25714 instanceof Error))
{var e_25741 = e25714;domina.replace_children_BANG_(content,value_25719);
} else
{if(cljs.core.constant$keyword$115)
{throw e25714;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__25748_25752 = cljs.core.seq(children);var chunk__25749_25753 = null;var count__25750_25754 = 0;var i__25751_25755 = 0;while(true){
if((i__25751_25755 < count__25750_25754))
{var child_25756 = chunk__25749_25753.cljs$core$IIndexed$_nth$arity$2(null,i__25751_25755);frag.appendChild(child_25756);
{
var G__25757 = seq__25748_25752;
var G__25758 = chunk__25749_25753;
var G__25759 = count__25750_25754;
var G__25760 = (i__25751_25755 + 1);
seq__25748_25752 = G__25757;
chunk__25749_25753 = G__25758;
count__25750_25754 = G__25759;
i__25751_25755 = G__25760;
continue;
}
} else
{var temp__4092__auto___25761 = cljs.core.seq(seq__25748_25752);if(temp__4092__auto___25761)
{var seq__25748_25762__$1 = temp__4092__auto___25761;if(cljs.core.chunked_seq_QMARK_(seq__25748_25762__$1))
{var c__4148__auto___25763 = cljs.core.chunk_first(seq__25748_25762__$1);{
var G__25764 = cljs.core.chunk_rest(seq__25748_25762__$1);
var G__25765 = c__4148__auto___25763;
var G__25766 = cljs.core.count(c__4148__auto___25763);
var G__25767 = 0;
seq__25748_25752 = G__25764;
chunk__25749_25753 = G__25765;
count__25750_25754 = G__25766;
i__25751_25755 = G__25767;
continue;
}
} else
{var child_25768 = cljs.core.first(seq__25748_25762__$1);frag.appendChild(child_25768);
{
var G__25769 = cljs.core.next(seq__25748_25762__$1);
var G__25770 = null;
var G__25771 = 0;
var G__25772 = 0;
seq__25748_25752 = G__25769;
chunk__25749_25753 = G__25770;
count__25750_25754 = G__25771;
i__25751_25755 = G__25772;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__25742_SHARP_,p2__25743_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__25742_SHARP_,p2__25743_SHARP_) : f.call(null,p1__25742_SHARP_,p2__25743_SHARP_));
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
{if((function (){var G__25774 = list_thing;if(G__25774)
{var bit__4050__auto__ = (G__25774.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25774.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25774.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25774);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25774);
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
{if((function (){var G__25775 = content;if(G__25775)
{var bit__4050__auto__ = (G__25775.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25775.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25775.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25775);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25775);
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
{if((function (){var G__25776 = content;if(G__25776)
{var bit__4050__auto__ = (G__25776.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__25776.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25776.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25776);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__25776);
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
