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
var opt_wrapper_16343 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16344 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16345 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16344,table_section_wrapper_16344,opt_wrapper_16343,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16345,table_section_wrapper_16344,cell_wrapper_16345,opt_wrapper_16343,table_section_wrapper_16344,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16344]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16350 = cljs.core.seq.call(null,tbody);var chunk__16351 = null;var count__16352 = 0;var i__16353 = 0;while(true){
if((i__16353 < count__16352))
{var child = cljs.core._nth.call(null,chunk__16351,i__16353);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16354 = seq__16350;
var G__16355 = chunk__16351;
var G__16356 = count__16352;
var G__16357 = (i__16353 + 1);
seq__16350 = G__16354;
chunk__16351 = G__16355;
count__16352 = G__16356;
i__16353 = G__16357;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16350);if(temp__4092__auto__)
{var seq__16350__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16350__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16350__$1);{
var G__16358 = cljs.core.chunk_rest.call(null,seq__16350__$1);
var G__16359 = c__4148__auto__;
var G__16360 = cljs.core.count.call(null,c__4148__auto__);
var G__16361 = 0;
seq__16350 = G__16358;
chunk__16351 = G__16359;
count__16352 = G__16360;
i__16353 = G__16361;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16350__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16362 = cljs.core.next.call(null,seq__16350__$1);
var G__16363 = null;
var G__16364 = 0;
var G__16365 = 0;
seq__16350 = G__16362;
chunk__16351 = G__16363;
count__16352 = G__16364;
i__16353 = G__16365;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16367 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16367,0,null);var start_wrap = cljs.core.nth.call(null,vec__16367,1,null);var end_wrap = cljs.core.nth.call(null,vec__16367,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16368 = wrapper.lastChild;
var G__16369 = (level - 1);
wrapper = G__16368;
level = G__16369;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj16371 = {};return obj16371;
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
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__16372){
var mesg = cljs.core.seq(arglist__16372);
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
log.cljs$lang$applyTo = (function (arglist__16373){
var mesg = cljs.core.seq(arglist__16373);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16374){
var contents = cljs.core.seq(arglist__16374);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16375_SHARP_){return p1__16375_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16376_SHARP_,p2__16377_SHARP_){return goog.dom.insertChildAt(p1__16376_SHARP_,p2__16377_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16379_SHARP_,p2__16378_SHARP_){return goog.dom.insertSiblingBefore(p2__16378_SHARP_,p1__16379_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16381_SHARP_,p2__16380_SHARP_){return goog.dom.insertSiblingAfter(p2__16380_SHARP_,p1__16381_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16383_SHARP_,p2__16382_SHARP_){return goog.dom.replaceNode(p2__16382_SHARP_,p1__16383_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16388_16392 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16389_16393 = null;var count__16390_16394 = 0;var i__16391_16395 = 0;while(true){
if((i__16391_16395 < count__16390_16394))
{var n_16396 = cljs.core._nth.call(null,chunk__16389_16393,i__16391_16395);goog.style.setStyle(n_16396,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16397 = seq__16388_16392;
var G__16398 = chunk__16389_16393;
var G__16399 = count__16390_16394;
var G__16400 = (i__16391_16395 + 1);
seq__16388_16392 = G__16397;
chunk__16389_16393 = G__16398;
count__16390_16394 = G__16399;
i__16391_16395 = G__16400;
continue;
}
} else
{var temp__4092__auto___16401 = cljs.core.seq.call(null,seq__16388_16392);if(temp__4092__auto___16401)
{var seq__16388_16402__$1 = temp__4092__auto___16401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16388_16402__$1))
{var c__4148__auto___16403 = cljs.core.chunk_first.call(null,seq__16388_16402__$1);{
var G__16404 = cljs.core.chunk_rest.call(null,seq__16388_16402__$1);
var G__16405 = c__4148__auto___16403;
var G__16406 = cljs.core.count.call(null,c__4148__auto___16403);
var G__16407 = 0;
seq__16388_16392 = G__16404;
chunk__16389_16393 = G__16405;
count__16390_16394 = G__16406;
i__16391_16395 = G__16407;
continue;
}
} else
{var n_16408 = cljs.core.first.call(null,seq__16388_16402__$1);goog.style.setStyle(n_16408,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16409 = cljs.core.next.call(null,seq__16388_16402__$1);
var G__16410 = null;
var G__16411 = 0;
var G__16412 = 0;
seq__16388_16392 = G__16409;
chunk__16389_16393 = G__16410;
count__16390_16394 = G__16411;
i__16391_16395 = G__16412;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16413){
var content = cljs.core.first(arglist__16413);
arglist__16413 = cljs.core.next(arglist__16413);
var name = cljs.core.first(arglist__16413);
var value = cljs.core.rest(arglist__16413);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16418_16422 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16419_16423 = null;var count__16420_16424 = 0;var i__16421_16425 = 0;while(true){
if((i__16421_16425 < count__16420_16424))
{var n_16426 = cljs.core._nth.call(null,chunk__16419_16423,i__16421_16425);n_16426.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16427 = seq__16418_16422;
var G__16428 = chunk__16419_16423;
var G__16429 = count__16420_16424;
var G__16430 = (i__16421_16425 + 1);
seq__16418_16422 = G__16427;
chunk__16419_16423 = G__16428;
count__16420_16424 = G__16429;
i__16421_16425 = G__16430;
continue;
}
} else
{var temp__4092__auto___16431 = cljs.core.seq.call(null,seq__16418_16422);if(temp__4092__auto___16431)
{var seq__16418_16432__$1 = temp__4092__auto___16431;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16418_16432__$1))
{var c__4148__auto___16433 = cljs.core.chunk_first.call(null,seq__16418_16432__$1);{
var G__16434 = cljs.core.chunk_rest.call(null,seq__16418_16432__$1);
var G__16435 = c__4148__auto___16433;
var G__16436 = cljs.core.count.call(null,c__4148__auto___16433);
var G__16437 = 0;
seq__16418_16422 = G__16434;
chunk__16419_16423 = G__16435;
count__16420_16424 = G__16436;
i__16421_16425 = G__16437;
continue;
}
} else
{var n_16438 = cljs.core.first.call(null,seq__16418_16432__$1);n_16438.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16439 = cljs.core.next.call(null,seq__16418_16432__$1);
var G__16440 = null;
var G__16441 = 0;
var G__16442 = 0;
seq__16418_16422 = G__16439;
chunk__16419_16423 = G__16440;
count__16420_16424 = G__16441;
i__16421_16425 = G__16442;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16443){
var content = cljs.core.first(arglist__16443);
arglist__16443 = cljs.core.next(arglist__16443);
var name = cljs.core.first(arglist__16443);
var value = cljs.core.rest(arglist__16443);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16448_16452 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16449_16453 = null;var count__16450_16454 = 0;var i__16451_16455 = 0;while(true){
if((i__16451_16455 < count__16450_16454))
{var n_16456 = cljs.core._nth.call(null,chunk__16449_16453,i__16451_16455);n_16456.removeAttribute(cljs.core.name.call(null,name));
{
var G__16457 = seq__16448_16452;
var G__16458 = chunk__16449_16453;
var G__16459 = count__16450_16454;
var G__16460 = (i__16451_16455 + 1);
seq__16448_16452 = G__16457;
chunk__16449_16453 = G__16458;
count__16450_16454 = G__16459;
i__16451_16455 = G__16460;
continue;
}
} else
{var temp__4092__auto___16461 = cljs.core.seq.call(null,seq__16448_16452);if(temp__4092__auto___16461)
{var seq__16448_16462__$1 = temp__4092__auto___16461;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16448_16462__$1))
{var c__4148__auto___16463 = cljs.core.chunk_first.call(null,seq__16448_16462__$1);{
var G__16464 = cljs.core.chunk_rest.call(null,seq__16448_16462__$1);
var G__16465 = c__4148__auto___16463;
var G__16466 = cljs.core.count.call(null,c__4148__auto___16463);
var G__16467 = 0;
seq__16448_16452 = G__16464;
chunk__16449_16453 = G__16465;
count__16450_16454 = G__16466;
i__16451_16455 = G__16467;
continue;
}
} else
{var n_16468 = cljs.core.first.call(null,seq__16448_16462__$1);n_16468.removeAttribute(cljs.core.name.call(null,name));
{
var G__16469 = cljs.core.next.call(null,seq__16448_16462__$1);
var G__16470 = null;
var G__16471 = 0;
var G__16472 = 0;
seq__16448_16452 = G__16469;
chunk__16449_16453 = G__16470;
count__16450_16454 = G__16471;
i__16451_16455 = G__16472;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16474 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16474,0,null);var v = cljs.core.nth.call(null,vec__16474,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16475_SHARP_){var attr = attrs__$1.item(p1__16475_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16482_16488 = cljs.core.seq.call(null,styles);var chunk__16483_16489 = null;var count__16484_16490 = 0;var i__16485_16491 = 0;while(true){
if((i__16485_16491 < count__16484_16490))
{var vec__16486_16492 = cljs.core._nth.call(null,chunk__16483_16489,i__16485_16491);var name_16493 = cljs.core.nth.call(null,vec__16486_16492,0,null);var value_16494 = cljs.core.nth.call(null,vec__16486_16492,1,null);domina.set_style_BANG_.call(null,content,name_16493,value_16494);
{
var G__16495 = seq__16482_16488;
var G__16496 = chunk__16483_16489;
var G__16497 = count__16484_16490;
var G__16498 = (i__16485_16491 + 1);
seq__16482_16488 = G__16495;
chunk__16483_16489 = G__16496;
count__16484_16490 = G__16497;
i__16485_16491 = G__16498;
continue;
}
} else
{var temp__4092__auto___16499 = cljs.core.seq.call(null,seq__16482_16488);if(temp__4092__auto___16499)
{var seq__16482_16500__$1 = temp__4092__auto___16499;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16482_16500__$1))
{var c__4148__auto___16501 = cljs.core.chunk_first.call(null,seq__16482_16500__$1);{
var G__16502 = cljs.core.chunk_rest.call(null,seq__16482_16500__$1);
var G__16503 = c__4148__auto___16501;
var G__16504 = cljs.core.count.call(null,c__4148__auto___16501);
var G__16505 = 0;
seq__16482_16488 = G__16502;
chunk__16483_16489 = G__16503;
count__16484_16490 = G__16504;
i__16485_16491 = G__16505;
continue;
}
} else
{var vec__16487_16506 = cljs.core.first.call(null,seq__16482_16500__$1);var name_16507 = cljs.core.nth.call(null,vec__16487_16506,0,null);var value_16508 = cljs.core.nth.call(null,vec__16487_16506,1,null);domina.set_style_BANG_.call(null,content,name_16507,value_16508);
{
var G__16509 = cljs.core.next.call(null,seq__16482_16500__$1);
var G__16510 = null;
var G__16511 = 0;
var G__16512 = 0;
seq__16482_16488 = G__16509;
chunk__16483_16489 = G__16510;
count__16484_16490 = G__16511;
i__16485_16491 = G__16512;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16519_16525 = cljs.core.seq.call(null,attrs);var chunk__16520_16526 = null;var count__16521_16527 = 0;var i__16522_16528 = 0;while(true){
if((i__16522_16528 < count__16521_16527))
{var vec__16523_16529 = cljs.core._nth.call(null,chunk__16520_16526,i__16522_16528);var name_16530 = cljs.core.nth.call(null,vec__16523_16529,0,null);var value_16531 = cljs.core.nth.call(null,vec__16523_16529,1,null);domina.set_attr_BANG_.call(null,content,name_16530,value_16531);
{
var G__16532 = seq__16519_16525;
var G__16533 = chunk__16520_16526;
var G__16534 = count__16521_16527;
var G__16535 = (i__16522_16528 + 1);
seq__16519_16525 = G__16532;
chunk__16520_16526 = G__16533;
count__16521_16527 = G__16534;
i__16522_16528 = G__16535;
continue;
}
} else
{var temp__4092__auto___16536 = cljs.core.seq.call(null,seq__16519_16525);if(temp__4092__auto___16536)
{var seq__16519_16537__$1 = temp__4092__auto___16536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16519_16537__$1))
{var c__4148__auto___16538 = cljs.core.chunk_first.call(null,seq__16519_16537__$1);{
var G__16539 = cljs.core.chunk_rest.call(null,seq__16519_16537__$1);
var G__16540 = c__4148__auto___16538;
var G__16541 = cljs.core.count.call(null,c__4148__auto___16538);
var G__16542 = 0;
seq__16519_16525 = G__16539;
chunk__16520_16526 = G__16540;
count__16521_16527 = G__16541;
i__16522_16528 = G__16542;
continue;
}
} else
{var vec__16524_16543 = cljs.core.first.call(null,seq__16519_16537__$1);var name_16544 = cljs.core.nth.call(null,vec__16524_16543,0,null);var value_16545 = cljs.core.nth.call(null,vec__16524_16543,1,null);domina.set_attr_BANG_.call(null,content,name_16544,value_16545);
{
var G__16546 = cljs.core.next.call(null,seq__16519_16537__$1);
var G__16547 = null;
var G__16548 = 0;
var G__16549 = 0;
seq__16519_16525 = G__16546;
chunk__16520_16526 = G__16547;
count__16521_16527 = G__16548;
i__16522_16528 = G__16549;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16554_16558 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16555_16559 = null;var count__16556_16560 = 0;var i__16557_16561 = 0;while(true){
if((i__16557_16561 < count__16556_16560))
{var node_16562 = cljs.core._nth.call(null,chunk__16555_16559,i__16557_16561);goog.dom.classes.add(node_16562,class$);
{
var G__16563 = seq__16554_16558;
var G__16564 = chunk__16555_16559;
var G__16565 = count__16556_16560;
var G__16566 = (i__16557_16561 + 1);
seq__16554_16558 = G__16563;
chunk__16555_16559 = G__16564;
count__16556_16560 = G__16565;
i__16557_16561 = G__16566;
continue;
}
} else
{var temp__4092__auto___16567 = cljs.core.seq.call(null,seq__16554_16558);if(temp__4092__auto___16567)
{var seq__16554_16568__$1 = temp__4092__auto___16567;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16554_16568__$1))
{var c__4148__auto___16569 = cljs.core.chunk_first.call(null,seq__16554_16568__$1);{
var G__16570 = cljs.core.chunk_rest.call(null,seq__16554_16568__$1);
var G__16571 = c__4148__auto___16569;
var G__16572 = cljs.core.count.call(null,c__4148__auto___16569);
var G__16573 = 0;
seq__16554_16558 = G__16570;
chunk__16555_16559 = G__16571;
count__16556_16560 = G__16572;
i__16557_16561 = G__16573;
continue;
}
} else
{var node_16574 = cljs.core.first.call(null,seq__16554_16568__$1);goog.dom.classes.add(node_16574,class$);
{
var G__16575 = cljs.core.next.call(null,seq__16554_16568__$1);
var G__16576 = null;
var G__16577 = 0;
var G__16578 = 0;
seq__16554_16558 = G__16575;
chunk__16555_16559 = G__16576;
count__16556_16560 = G__16577;
i__16557_16561 = G__16578;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16583_16587 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16584_16588 = null;var count__16585_16589 = 0;var i__16586_16590 = 0;while(true){
if((i__16586_16590 < count__16585_16589))
{var node_16591 = cljs.core._nth.call(null,chunk__16584_16588,i__16586_16590);goog.dom.classes.remove(node_16591,class$);
{
var G__16592 = seq__16583_16587;
var G__16593 = chunk__16584_16588;
var G__16594 = count__16585_16589;
var G__16595 = (i__16586_16590 + 1);
seq__16583_16587 = G__16592;
chunk__16584_16588 = G__16593;
count__16585_16589 = G__16594;
i__16586_16590 = G__16595;
continue;
}
} else
{var temp__4092__auto___16596 = cljs.core.seq.call(null,seq__16583_16587);if(temp__4092__auto___16596)
{var seq__16583_16597__$1 = temp__4092__auto___16596;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16583_16597__$1))
{var c__4148__auto___16598 = cljs.core.chunk_first.call(null,seq__16583_16597__$1);{
var G__16599 = cljs.core.chunk_rest.call(null,seq__16583_16597__$1);
var G__16600 = c__4148__auto___16598;
var G__16601 = cljs.core.count.call(null,c__4148__auto___16598);
var G__16602 = 0;
seq__16583_16587 = G__16599;
chunk__16584_16588 = G__16600;
count__16585_16589 = G__16601;
i__16586_16590 = G__16602;
continue;
}
} else
{var node_16603 = cljs.core.first.call(null,seq__16583_16597__$1);goog.dom.classes.remove(node_16603,class$);
{
var G__16604 = cljs.core.next.call(null,seq__16583_16597__$1);
var G__16605 = null;
var G__16606 = 0;
var G__16607 = 0;
seq__16583_16587 = G__16604;
chunk__16584_16588 = G__16605;
count__16585_16589 = G__16606;
i__16586_16590 = G__16607;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16612_16616 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16613_16617 = null;var count__16614_16618 = 0;var i__16615_16619 = 0;while(true){
if((i__16615_16619 < count__16614_16618))
{var node_16620 = cljs.core._nth.call(null,chunk__16613_16617,i__16615_16619);goog.dom.classes.toggle(node_16620,class$);
{
var G__16621 = seq__16612_16616;
var G__16622 = chunk__16613_16617;
var G__16623 = count__16614_16618;
var G__16624 = (i__16615_16619 + 1);
seq__16612_16616 = G__16621;
chunk__16613_16617 = G__16622;
count__16614_16618 = G__16623;
i__16615_16619 = G__16624;
continue;
}
} else
{var temp__4092__auto___16625 = cljs.core.seq.call(null,seq__16612_16616);if(temp__4092__auto___16625)
{var seq__16612_16626__$1 = temp__4092__auto___16625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16612_16626__$1))
{var c__4148__auto___16627 = cljs.core.chunk_first.call(null,seq__16612_16626__$1);{
var G__16628 = cljs.core.chunk_rest.call(null,seq__16612_16626__$1);
var G__16629 = c__4148__auto___16627;
var G__16630 = cljs.core.count.call(null,c__4148__auto___16627);
var G__16631 = 0;
seq__16612_16616 = G__16628;
chunk__16613_16617 = G__16629;
count__16614_16618 = G__16630;
i__16615_16619 = G__16631;
continue;
}
} else
{var node_16632 = cljs.core.first.call(null,seq__16612_16626__$1);goog.dom.classes.toggle(node_16632,class$);
{
var G__16633 = cljs.core.next.call(null,seq__16612_16626__$1);
var G__16634 = null;
var G__16635 = 0;
var G__16636 = 0;
seq__16612_16616 = G__16633;
chunk__16613_16617 = G__16634;
count__16614_16618 = G__16635;
i__16615_16619 = G__16636;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16645__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16641_16646 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16642_16647 = null;var count__16643_16648 = 0;var i__16644_16649 = 0;while(true){
if((i__16644_16649 < count__16643_16648))
{var node_16650 = cljs.core._nth.call(null,chunk__16642_16647,i__16644_16649);goog.dom.classes.set(node_16650,classes_16645__$1);
{
var G__16651 = seq__16641_16646;
var G__16652 = chunk__16642_16647;
var G__16653 = count__16643_16648;
var G__16654 = (i__16644_16649 + 1);
seq__16641_16646 = G__16651;
chunk__16642_16647 = G__16652;
count__16643_16648 = G__16653;
i__16644_16649 = G__16654;
continue;
}
} else
{var temp__4092__auto___16655 = cljs.core.seq.call(null,seq__16641_16646);if(temp__4092__auto___16655)
{var seq__16641_16656__$1 = temp__4092__auto___16655;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16641_16656__$1))
{var c__4148__auto___16657 = cljs.core.chunk_first.call(null,seq__16641_16656__$1);{
var G__16658 = cljs.core.chunk_rest.call(null,seq__16641_16656__$1);
var G__16659 = c__4148__auto___16657;
var G__16660 = cljs.core.count.call(null,c__4148__auto___16657);
var G__16661 = 0;
seq__16641_16646 = G__16658;
chunk__16642_16647 = G__16659;
count__16643_16648 = G__16660;
i__16644_16649 = G__16661;
continue;
}
} else
{var node_16662 = cljs.core.first.call(null,seq__16641_16656__$1);goog.dom.classes.set(node_16662,classes_16645__$1);
{
var G__16663 = cljs.core.next.call(null,seq__16641_16656__$1);
var G__16664 = null;
var G__16665 = 0;
var G__16666 = 0;
seq__16641_16646 = G__16663;
chunk__16642_16647 = G__16664;
count__16643_16648 = G__16665;
i__16644_16649 = G__16666;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16671_16675 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16672_16676 = null;var count__16673_16677 = 0;var i__16674_16678 = 0;while(true){
if((i__16674_16678 < count__16673_16677))
{var node_16679 = cljs.core._nth.call(null,chunk__16672_16676,i__16674_16678);goog.dom.setTextContent(node_16679,value);
{
var G__16680 = seq__16671_16675;
var G__16681 = chunk__16672_16676;
var G__16682 = count__16673_16677;
var G__16683 = (i__16674_16678 + 1);
seq__16671_16675 = G__16680;
chunk__16672_16676 = G__16681;
count__16673_16677 = G__16682;
i__16674_16678 = G__16683;
continue;
}
} else
{var temp__4092__auto___16684 = cljs.core.seq.call(null,seq__16671_16675);if(temp__4092__auto___16684)
{var seq__16671_16685__$1 = temp__4092__auto___16684;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16671_16685__$1))
{var c__4148__auto___16686 = cljs.core.chunk_first.call(null,seq__16671_16685__$1);{
var G__16687 = cljs.core.chunk_rest.call(null,seq__16671_16685__$1);
var G__16688 = c__4148__auto___16686;
var G__16689 = cljs.core.count.call(null,c__4148__auto___16686);
var G__16690 = 0;
seq__16671_16675 = G__16687;
chunk__16672_16676 = G__16688;
count__16673_16677 = G__16689;
i__16674_16678 = G__16690;
continue;
}
} else
{var node_16691 = cljs.core.first.call(null,seq__16671_16685__$1);goog.dom.setTextContent(node_16691,value);
{
var G__16692 = cljs.core.next.call(null,seq__16671_16685__$1);
var G__16693 = null;
var G__16694 = 0;
var G__16695 = 0;
seq__16671_16675 = G__16692;
chunk__16672_16676 = G__16693;
count__16673_16677 = G__16694;
i__16674_16678 = G__16695;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16700_16704 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16701_16705 = null;var count__16702_16706 = 0;var i__16703_16707 = 0;while(true){
if((i__16703_16707 < count__16702_16706))
{var node_16708 = cljs.core._nth.call(null,chunk__16701_16705,i__16703_16707);goog.dom.forms.setValue(node_16708,value);
{
var G__16709 = seq__16700_16704;
var G__16710 = chunk__16701_16705;
var G__16711 = count__16702_16706;
var G__16712 = (i__16703_16707 + 1);
seq__16700_16704 = G__16709;
chunk__16701_16705 = G__16710;
count__16702_16706 = G__16711;
i__16703_16707 = G__16712;
continue;
}
} else
{var temp__4092__auto___16713 = cljs.core.seq.call(null,seq__16700_16704);if(temp__4092__auto___16713)
{var seq__16700_16714__$1 = temp__4092__auto___16713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16700_16714__$1))
{var c__4148__auto___16715 = cljs.core.chunk_first.call(null,seq__16700_16714__$1);{
var G__16716 = cljs.core.chunk_rest.call(null,seq__16700_16714__$1);
var G__16717 = c__4148__auto___16715;
var G__16718 = cljs.core.count.call(null,c__4148__auto___16715);
var G__16719 = 0;
seq__16700_16704 = G__16716;
chunk__16701_16705 = G__16717;
count__16702_16706 = G__16718;
i__16703_16707 = G__16719;
continue;
}
} else
{var node_16720 = cljs.core.first.call(null,seq__16700_16714__$1);goog.dom.forms.setValue(node_16720,value);
{
var G__16721 = cljs.core.next.call(null,seq__16700_16714__$1);
var G__16722 = null;
var G__16723 = 0;
var G__16724 = 0;
seq__16700_16704 = G__16721;
chunk__16701_16705 = G__16722;
count__16702_16706 = G__16723;
i__16703_16707 = G__16724;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
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
{var value_16735 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16731_16736 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16732_16737 = null;var count__16733_16738 = 0;var i__16734_16739 = 0;while(true){
if((i__16734_16739 < count__16733_16738))
{var node_16740 = cljs.core._nth.call(null,chunk__16732_16737,i__16734_16739);node_16740.innerHTML = value_16735;
{
var G__16741 = seq__16731_16736;
var G__16742 = chunk__16732_16737;
var G__16743 = count__16733_16738;
var G__16744 = (i__16734_16739 + 1);
seq__16731_16736 = G__16741;
chunk__16732_16737 = G__16742;
count__16733_16738 = G__16743;
i__16734_16739 = G__16744;
continue;
}
} else
{var temp__4092__auto___16745 = cljs.core.seq.call(null,seq__16731_16736);if(temp__4092__auto___16745)
{var seq__16731_16746__$1 = temp__4092__auto___16745;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16731_16746__$1))
{var c__4148__auto___16747 = cljs.core.chunk_first.call(null,seq__16731_16746__$1);{
var G__16748 = cljs.core.chunk_rest.call(null,seq__16731_16746__$1);
var G__16749 = c__4148__auto___16747;
var G__16750 = cljs.core.count.call(null,c__4148__auto___16747);
var G__16751 = 0;
seq__16731_16736 = G__16748;
chunk__16732_16737 = G__16749;
count__16733_16738 = G__16750;
i__16734_16739 = G__16751;
continue;
}
} else
{var node_16752 = cljs.core.first.call(null,seq__16731_16746__$1);node_16752.innerHTML = value_16735;
{
var G__16753 = cljs.core.next.call(null,seq__16731_16746__$1);
var G__16754 = null;
var G__16755 = 0;
var G__16756 = 0;
seq__16731_16736 = G__16753;
chunk__16732_16737 = G__16754;
count__16733_16738 = G__16755;
i__16734_16739 = G__16756;
continue;
}
}
} else
{}
}
break;
}
}catch (e16730){if((e16730 instanceof Error))
{var e_16757 = e16730;domina.replace_children_BANG_.call(null,content,value_16735);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16730;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16764_16768 = cljs.core.seq.call(null,children);var chunk__16765_16769 = null;var count__16766_16770 = 0;var i__16767_16771 = 0;while(true){
if((i__16767_16771 < count__16766_16770))
{var child_16772 = cljs.core._nth.call(null,chunk__16765_16769,i__16767_16771);frag.appendChild(child_16772);
{
var G__16773 = seq__16764_16768;
var G__16774 = chunk__16765_16769;
var G__16775 = count__16766_16770;
var G__16776 = (i__16767_16771 + 1);
seq__16764_16768 = G__16773;
chunk__16765_16769 = G__16774;
count__16766_16770 = G__16775;
i__16767_16771 = G__16776;
continue;
}
} else
{var temp__4092__auto___16777 = cljs.core.seq.call(null,seq__16764_16768);if(temp__4092__auto___16777)
{var seq__16764_16778__$1 = temp__4092__auto___16777;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16764_16778__$1))
{var c__4148__auto___16779 = cljs.core.chunk_first.call(null,seq__16764_16778__$1);{
var G__16780 = cljs.core.chunk_rest.call(null,seq__16764_16778__$1);
var G__16781 = c__4148__auto___16779;
var G__16782 = cljs.core.count.call(null,c__4148__auto___16779);
var G__16783 = 0;
seq__16764_16768 = G__16780;
chunk__16765_16769 = G__16781;
count__16766_16770 = G__16782;
i__16767_16771 = G__16783;
continue;
}
} else
{var child_16784 = cljs.core.first.call(null,seq__16764_16778__$1);frag.appendChild(child_16784);
{
var G__16785 = cljs.core.next.call(null,seq__16764_16778__$1);
var G__16786 = null;
var G__16787 = 0;
var G__16788 = 0;
seq__16764_16768 = G__16785;
chunk__16765_16769 = G__16786;
count__16766_16770 = G__16787;
i__16767_16771 = G__16788;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16758_SHARP_,p2__16759_SHARP_){return f.call(null,p1__16758_SHARP_,p2__16759_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__16790 = list_thing;if(G__16790)
{var bit__4050__auto__ = (G__16790.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16790.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16790.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16790);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16790);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__16791 = content;if(G__16791)
{var bit__4050__auto__ = (G__16791.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16791.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16791.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16791);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16791);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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
{if((function (){var G__16792 = content;if(G__16792)
{var bit__4050__auto__ = (G__16792.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16792.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16792.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16792);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16792);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
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