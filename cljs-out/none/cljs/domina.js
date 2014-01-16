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
var opt_wrapper_15392 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15393 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15394 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15393,table_section_wrapper_15393,opt_wrapper_15392,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15394,table_section_wrapper_15393,cell_wrapper_15394,opt_wrapper_15392,table_section_wrapper_15393,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15393]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15399 = cljs.core.seq.call(null,tbody);var chunk__15400 = null;var count__15401 = 0;var i__15402 = 0;while(true){
if((i__15402 < count__15401))
{var child = cljs.core._nth.call(null,chunk__15400,i__15402);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15403 = seq__15399;
var G__15404 = chunk__15400;
var G__15405 = count__15401;
var G__15406 = (i__15402 + 1);
seq__15399 = G__15403;
chunk__15400 = G__15404;
count__15401 = G__15405;
i__15402 = G__15406;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15399);if(temp__4092__auto__)
{var seq__15399__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15399__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15399__$1);{
var G__15407 = cljs.core.chunk_rest.call(null,seq__15399__$1);
var G__15408 = c__4148__auto__;
var G__15409 = cljs.core.count.call(null,c__4148__auto__);
var G__15410 = 0;
seq__15399 = G__15407;
chunk__15400 = G__15408;
count__15401 = G__15409;
i__15402 = G__15410;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15399__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15411 = cljs.core.next.call(null,seq__15399__$1);
var G__15412 = null;
var G__15413 = 0;
var G__15414 = 0;
seq__15399 = G__15411;
chunk__15400 = G__15412;
count__15401 = G__15413;
i__15402 = G__15414;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15416 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15416,0,null);var start_wrap = cljs.core.nth.call(null,vec__15416,1,null);var end_wrap = cljs.core.nth.call(null,vec__15416,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15417 = wrapper.lastChild;
var G__15418 = (level - 1);
wrapper = G__15417;
level = G__15418;
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
domina.DomContent = (function (){var obj15420 = {};return obj15420;
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
log_debug.cljs$lang$applyTo = (function (arglist__15421){
var mesg = cljs.core.seq(arglist__15421);
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
log.cljs$lang$applyTo = (function (arglist__15422){
var mesg = cljs.core.seq(arglist__15422);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15423){
var contents = cljs.core.seq(arglist__15423);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15424_SHARP_){return p1__15424_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15425_SHARP_,p2__15426_SHARP_){return goog.dom.insertChildAt(p1__15425_SHARP_,p2__15426_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15428_SHARP_,p2__15427_SHARP_){return goog.dom.insertSiblingBefore(p2__15427_SHARP_,p1__15428_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15430_SHARP_,p2__15429_SHARP_){return goog.dom.insertSiblingAfter(p2__15429_SHARP_,p1__15430_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15432_SHARP_,p2__15431_SHARP_){return goog.dom.replaceNode(p2__15431_SHARP_,p1__15432_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15437_15441 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15438_15442 = null;var count__15439_15443 = 0;var i__15440_15444 = 0;while(true){
if((i__15440_15444 < count__15439_15443))
{var n_15445 = cljs.core._nth.call(null,chunk__15438_15442,i__15440_15444);goog.style.setStyle(n_15445,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15446 = seq__15437_15441;
var G__15447 = chunk__15438_15442;
var G__15448 = count__15439_15443;
var G__15449 = (i__15440_15444 + 1);
seq__15437_15441 = G__15446;
chunk__15438_15442 = G__15447;
count__15439_15443 = G__15448;
i__15440_15444 = G__15449;
continue;
}
} else
{var temp__4092__auto___15450 = cljs.core.seq.call(null,seq__15437_15441);if(temp__4092__auto___15450)
{var seq__15437_15451__$1 = temp__4092__auto___15450;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15437_15451__$1))
{var c__4148__auto___15452 = cljs.core.chunk_first.call(null,seq__15437_15451__$1);{
var G__15453 = cljs.core.chunk_rest.call(null,seq__15437_15451__$1);
var G__15454 = c__4148__auto___15452;
var G__15455 = cljs.core.count.call(null,c__4148__auto___15452);
var G__15456 = 0;
seq__15437_15441 = G__15453;
chunk__15438_15442 = G__15454;
count__15439_15443 = G__15455;
i__15440_15444 = G__15456;
continue;
}
} else
{var n_15457 = cljs.core.first.call(null,seq__15437_15451__$1);goog.style.setStyle(n_15457,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15458 = cljs.core.next.call(null,seq__15437_15451__$1);
var G__15459 = null;
var G__15460 = 0;
var G__15461 = 0;
seq__15437_15441 = G__15458;
chunk__15438_15442 = G__15459;
count__15439_15443 = G__15460;
i__15440_15444 = G__15461;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15462){
var content = cljs.core.first(arglist__15462);
arglist__15462 = cljs.core.next(arglist__15462);
var name = cljs.core.first(arglist__15462);
var value = cljs.core.rest(arglist__15462);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15467_15471 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15468_15472 = null;var count__15469_15473 = 0;var i__15470_15474 = 0;while(true){
if((i__15470_15474 < count__15469_15473))
{var n_15475 = cljs.core._nth.call(null,chunk__15468_15472,i__15470_15474);n_15475.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15476 = seq__15467_15471;
var G__15477 = chunk__15468_15472;
var G__15478 = count__15469_15473;
var G__15479 = (i__15470_15474 + 1);
seq__15467_15471 = G__15476;
chunk__15468_15472 = G__15477;
count__15469_15473 = G__15478;
i__15470_15474 = G__15479;
continue;
}
} else
{var temp__4092__auto___15480 = cljs.core.seq.call(null,seq__15467_15471);if(temp__4092__auto___15480)
{var seq__15467_15481__$1 = temp__4092__auto___15480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15467_15481__$1))
{var c__4148__auto___15482 = cljs.core.chunk_first.call(null,seq__15467_15481__$1);{
var G__15483 = cljs.core.chunk_rest.call(null,seq__15467_15481__$1);
var G__15484 = c__4148__auto___15482;
var G__15485 = cljs.core.count.call(null,c__4148__auto___15482);
var G__15486 = 0;
seq__15467_15471 = G__15483;
chunk__15468_15472 = G__15484;
count__15469_15473 = G__15485;
i__15470_15474 = G__15486;
continue;
}
} else
{var n_15487 = cljs.core.first.call(null,seq__15467_15481__$1);n_15487.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15488 = cljs.core.next.call(null,seq__15467_15481__$1);
var G__15489 = null;
var G__15490 = 0;
var G__15491 = 0;
seq__15467_15471 = G__15488;
chunk__15468_15472 = G__15489;
count__15469_15473 = G__15490;
i__15470_15474 = G__15491;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15492){
var content = cljs.core.first(arglist__15492);
arglist__15492 = cljs.core.next(arglist__15492);
var name = cljs.core.first(arglist__15492);
var value = cljs.core.rest(arglist__15492);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15497_15501 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15498_15502 = null;var count__15499_15503 = 0;var i__15500_15504 = 0;while(true){
if((i__15500_15504 < count__15499_15503))
{var n_15505 = cljs.core._nth.call(null,chunk__15498_15502,i__15500_15504);n_15505.removeAttribute(cljs.core.name.call(null,name));
{
var G__15506 = seq__15497_15501;
var G__15507 = chunk__15498_15502;
var G__15508 = count__15499_15503;
var G__15509 = (i__15500_15504 + 1);
seq__15497_15501 = G__15506;
chunk__15498_15502 = G__15507;
count__15499_15503 = G__15508;
i__15500_15504 = G__15509;
continue;
}
} else
{var temp__4092__auto___15510 = cljs.core.seq.call(null,seq__15497_15501);if(temp__4092__auto___15510)
{var seq__15497_15511__$1 = temp__4092__auto___15510;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15497_15511__$1))
{var c__4148__auto___15512 = cljs.core.chunk_first.call(null,seq__15497_15511__$1);{
var G__15513 = cljs.core.chunk_rest.call(null,seq__15497_15511__$1);
var G__15514 = c__4148__auto___15512;
var G__15515 = cljs.core.count.call(null,c__4148__auto___15512);
var G__15516 = 0;
seq__15497_15501 = G__15513;
chunk__15498_15502 = G__15514;
count__15499_15503 = G__15515;
i__15500_15504 = G__15516;
continue;
}
} else
{var n_15517 = cljs.core.first.call(null,seq__15497_15511__$1);n_15517.removeAttribute(cljs.core.name.call(null,name));
{
var G__15518 = cljs.core.next.call(null,seq__15497_15511__$1);
var G__15519 = null;
var G__15520 = 0;
var G__15521 = 0;
seq__15497_15501 = G__15518;
chunk__15498_15502 = G__15519;
count__15499_15503 = G__15520;
i__15500_15504 = G__15521;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15523 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15523,0,null);var v = cljs.core.nth.call(null,vec__15523,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15524_SHARP_){var attr = attrs__$1.item(p1__15524_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15531_15537 = cljs.core.seq.call(null,styles);var chunk__15532_15538 = null;var count__15533_15539 = 0;var i__15534_15540 = 0;while(true){
if((i__15534_15540 < count__15533_15539))
{var vec__15535_15541 = cljs.core._nth.call(null,chunk__15532_15538,i__15534_15540);var name_15542 = cljs.core.nth.call(null,vec__15535_15541,0,null);var value_15543 = cljs.core.nth.call(null,vec__15535_15541,1,null);domina.set_style_BANG_.call(null,content,name_15542,value_15543);
{
var G__15544 = seq__15531_15537;
var G__15545 = chunk__15532_15538;
var G__15546 = count__15533_15539;
var G__15547 = (i__15534_15540 + 1);
seq__15531_15537 = G__15544;
chunk__15532_15538 = G__15545;
count__15533_15539 = G__15546;
i__15534_15540 = G__15547;
continue;
}
} else
{var temp__4092__auto___15548 = cljs.core.seq.call(null,seq__15531_15537);if(temp__4092__auto___15548)
{var seq__15531_15549__$1 = temp__4092__auto___15548;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15531_15549__$1))
{var c__4148__auto___15550 = cljs.core.chunk_first.call(null,seq__15531_15549__$1);{
var G__15551 = cljs.core.chunk_rest.call(null,seq__15531_15549__$1);
var G__15552 = c__4148__auto___15550;
var G__15553 = cljs.core.count.call(null,c__4148__auto___15550);
var G__15554 = 0;
seq__15531_15537 = G__15551;
chunk__15532_15538 = G__15552;
count__15533_15539 = G__15553;
i__15534_15540 = G__15554;
continue;
}
} else
{var vec__15536_15555 = cljs.core.first.call(null,seq__15531_15549__$1);var name_15556 = cljs.core.nth.call(null,vec__15536_15555,0,null);var value_15557 = cljs.core.nth.call(null,vec__15536_15555,1,null);domina.set_style_BANG_.call(null,content,name_15556,value_15557);
{
var G__15558 = cljs.core.next.call(null,seq__15531_15549__$1);
var G__15559 = null;
var G__15560 = 0;
var G__15561 = 0;
seq__15531_15537 = G__15558;
chunk__15532_15538 = G__15559;
count__15533_15539 = G__15560;
i__15534_15540 = G__15561;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__15568_15574 = cljs.core.seq.call(null,attrs);var chunk__15569_15575 = null;var count__15570_15576 = 0;var i__15571_15577 = 0;while(true){
if((i__15571_15577 < count__15570_15576))
{var vec__15572_15578 = cljs.core._nth.call(null,chunk__15569_15575,i__15571_15577);var name_15579 = cljs.core.nth.call(null,vec__15572_15578,0,null);var value_15580 = cljs.core.nth.call(null,vec__15572_15578,1,null);domina.set_attr_BANG_.call(null,content,name_15579,value_15580);
{
var G__15581 = seq__15568_15574;
var G__15582 = chunk__15569_15575;
var G__15583 = count__15570_15576;
var G__15584 = (i__15571_15577 + 1);
seq__15568_15574 = G__15581;
chunk__15569_15575 = G__15582;
count__15570_15576 = G__15583;
i__15571_15577 = G__15584;
continue;
}
} else
{var temp__4092__auto___15585 = cljs.core.seq.call(null,seq__15568_15574);if(temp__4092__auto___15585)
{var seq__15568_15586__$1 = temp__4092__auto___15585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15568_15586__$1))
{var c__4148__auto___15587 = cljs.core.chunk_first.call(null,seq__15568_15586__$1);{
var G__15588 = cljs.core.chunk_rest.call(null,seq__15568_15586__$1);
var G__15589 = c__4148__auto___15587;
var G__15590 = cljs.core.count.call(null,c__4148__auto___15587);
var G__15591 = 0;
seq__15568_15574 = G__15588;
chunk__15569_15575 = G__15589;
count__15570_15576 = G__15590;
i__15571_15577 = G__15591;
continue;
}
} else
{var vec__15573_15592 = cljs.core.first.call(null,seq__15568_15586__$1);var name_15593 = cljs.core.nth.call(null,vec__15573_15592,0,null);var value_15594 = cljs.core.nth.call(null,vec__15573_15592,1,null);domina.set_attr_BANG_.call(null,content,name_15593,value_15594);
{
var G__15595 = cljs.core.next.call(null,seq__15568_15586__$1);
var G__15596 = null;
var G__15597 = 0;
var G__15598 = 0;
seq__15568_15574 = G__15595;
chunk__15569_15575 = G__15596;
count__15570_15576 = G__15597;
i__15571_15577 = G__15598;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__15603_15607 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15604_15608 = null;var count__15605_15609 = 0;var i__15606_15610 = 0;while(true){
if((i__15606_15610 < count__15605_15609))
{var node_15611 = cljs.core._nth.call(null,chunk__15604_15608,i__15606_15610);goog.dom.classes.add(node_15611,class$);
{
var G__15612 = seq__15603_15607;
var G__15613 = chunk__15604_15608;
var G__15614 = count__15605_15609;
var G__15615 = (i__15606_15610 + 1);
seq__15603_15607 = G__15612;
chunk__15604_15608 = G__15613;
count__15605_15609 = G__15614;
i__15606_15610 = G__15615;
continue;
}
} else
{var temp__4092__auto___15616 = cljs.core.seq.call(null,seq__15603_15607);if(temp__4092__auto___15616)
{var seq__15603_15617__$1 = temp__4092__auto___15616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15603_15617__$1))
{var c__4148__auto___15618 = cljs.core.chunk_first.call(null,seq__15603_15617__$1);{
var G__15619 = cljs.core.chunk_rest.call(null,seq__15603_15617__$1);
var G__15620 = c__4148__auto___15618;
var G__15621 = cljs.core.count.call(null,c__4148__auto___15618);
var G__15622 = 0;
seq__15603_15607 = G__15619;
chunk__15604_15608 = G__15620;
count__15605_15609 = G__15621;
i__15606_15610 = G__15622;
continue;
}
} else
{var node_15623 = cljs.core.first.call(null,seq__15603_15617__$1);goog.dom.classes.add(node_15623,class$);
{
var G__15624 = cljs.core.next.call(null,seq__15603_15617__$1);
var G__15625 = null;
var G__15626 = 0;
var G__15627 = 0;
seq__15603_15607 = G__15624;
chunk__15604_15608 = G__15625;
count__15605_15609 = G__15626;
i__15606_15610 = G__15627;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__15632_15636 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15633_15637 = null;var count__15634_15638 = 0;var i__15635_15639 = 0;while(true){
if((i__15635_15639 < count__15634_15638))
{var node_15640 = cljs.core._nth.call(null,chunk__15633_15637,i__15635_15639);goog.dom.classes.remove(node_15640,class$);
{
var G__15641 = seq__15632_15636;
var G__15642 = chunk__15633_15637;
var G__15643 = count__15634_15638;
var G__15644 = (i__15635_15639 + 1);
seq__15632_15636 = G__15641;
chunk__15633_15637 = G__15642;
count__15634_15638 = G__15643;
i__15635_15639 = G__15644;
continue;
}
} else
{var temp__4092__auto___15645 = cljs.core.seq.call(null,seq__15632_15636);if(temp__4092__auto___15645)
{var seq__15632_15646__$1 = temp__4092__auto___15645;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15632_15646__$1))
{var c__4148__auto___15647 = cljs.core.chunk_first.call(null,seq__15632_15646__$1);{
var G__15648 = cljs.core.chunk_rest.call(null,seq__15632_15646__$1);
var G__15649 = c__4148__auto___15647;
var G__15650 = cljs.core.count.call(null,c__4148__auto___15647);
var G__15651 = 0;
seq__15632_15636 = G__15648;
chunk__15633_15637 = G__15649;
count__15634_15638 = G__15650;
i__15635_15639 = G__15651;
continue;
}
} else
{var node_15652 = cljs.core.first.call(null,seq__15632_15646__$1);goog.dom.classes.remove(node_15652,class$);
{
var G__15653 = cljs.core.next.call(null,seq__15632_15646__$1);
var G__15654 = null;
var G__15655 = 0;
var G__15656 = 0;
seq__15632_15636 = G__15653;
chunk__15633_15637 = G__15654;
count__15634_15638 = G__15655;
i__15635_15639 = G__15656;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__15661_15665 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15662_15666 = null;var count__15663_15667 = 0;var i__15664_15668 = 0;while(true){
if((i__15664_15668 < count__15663_15667))
{var node_15669 = cljs.core._nth.call(null,chunk__15662_15666,i__15664_15668);goog.dom.classes.toggle(node_15669,class$);
{
var G__15670 = seq__15661_15665;
var G__15671 = chunk__15662_15666;
var G__15672 = count__15663_15667;
var G__15673 = (i__15664_15668 + 1);
seq__15661_15665 = G__15670;
chunk__15662_15666 = G__15671;
count__15663_15667 = G__15672;
i__15664_15668 = G__15673;
continue;
}
} else
{var temp__4092__auto___15674 = cljs.core.seq.call(null,seq__15661_15665);if(temp__4092__auto___15674)
{var seq__15661_15675__$1 = temp__4092__auto___15674;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15661_15675__$1))
{var c__4148__auto___15676 = cljs.core.chunk_first.call(null,seq__15661_15675__$1);{
var G__15677 = cljs.core.chunk_rest.call(null,seq__15661_15675__$1);
var G__15678 = c__4148__auto___15676;
var G__15679 = cljs.core.count.call(null,c__4148__auto___15676);
var G__15680 = 0;
seq__15661_15665 = G__15677;
chunk__15662_15666 = G__15678;
count__15663_15667 = G__15679;
i__15664_15668 = G__15680;
continue;
}
} else
{var node_15681 = cljs.core.first.call(null,seq__15661_15675__$1);goog.dom.classes.toggle(node_15681,class$);
{
var G__15682 = cljs.core.next.call(null,seq__15661_15675__$1);
var G__15683 = null;
var G__15684 = 0;
var G__15685 = 0;
seq__15661_15665 = G__15682;
chunk__15662_15666 = G__15683;
count__15663_15667 = G__15684;
i__15664_15668 = G__15685;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_15694__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__15690_15695 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15691_15696 = null;var count__15692_15697 = 0;var i__15693_15698 = 0;while(true){
if((i__15693_15698 < count__15692_15697))
{var node_15699 = cljs.core._nth.call(null,chunk__15691_15696,i__15693_15698);goog.dom.classes.set(node_15699,classes_15694__$1);
{
var G__15700 = seq__15690_15695;
var G__15701 = chunk__15691_15696;
var G__15702 = count__15692_15697;
var G__15703 = (i__15693_15698 + 1);
seq__15690_15695 = G__15700;
chunk__15691_15696 = G__15701;
count__15692_15697 = G__15702;
i__15693_15698 = G__15703;
continue;
}
} else
{var temp__4092__auto___15704 = cljs.core.seq.call(null,seq__15690_15695);if(temp__4092__auto___15704)
{var seq__15690_15705__$1 = temp__4092__auto___15704;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15690_15705__$1))
{var c__4148__auto___15706 = cljs.core.chunk_first.call(null,seq__15690_15705__$1);{
var G__15707 = cljs.core.chunk_rest.call(null,seq__15690_15705__$1);
var G__15708 = c__4148__auto___15706;
var G__15709 = cljs.core.count.call(null,c__4148__auto___15706);
var G__15710 = 0;
seq__15690_15695 = G__15707;
chunk__15691_15696 = G__15708;
count__15692_15697 = G__15709;
i__15693_15698 = G__15710;
continue;
}
} else
{var node_15711 = cljs.core.first.call(null,seq__15690_15705__$1);goog.dom.classes.set(node_15711,classes_15694__$1);
{
var G__15712 = cljs.core.next.call(null,seq__15690_15705__$1);
var G__15713 = null;
var G__15714 = 0;
var G__15715 = 0;
seq__15690_15695 = G__15712;
chunk__15691_15696 = G__15713;
count__15692_15697 = G__15714;
i__15693_15698 = G__15715;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__15720_15724 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15721_15725 = null;var count__15722_15726 = 0;var i__15723_15727 = 0;while(true){
if((i__15723_15727 < count__15722_15726))
{var node_15728 = cljs.core._nth.call(null,chunk__15721_15725,i__15723_15727);goog.dom.setTextContent(node_15728,value);
{
var G__15729 = seq__15720_15724;
var G__15730 = chunk__15721_15725;
var G__15731 = count__15722_15726;
var G__15732 = (i__15723_15727 + 1);
seq__15720_15724 = G__15729;
chunk__15721_15725 = G__15730;
count__15722_15726 = G__15731;
i__15723_15727 = G__15732;
continue;
}
} else
{var temp__4092__auto___15733 = cljs.core.seq.call(null,seq__15720_15724);if(temp__4092__auto___15733)
{var seq__15720_15734__$1 = temp__4092__auto___15733;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15720_15734__$1))
{var c__4148__auto___15735 = cljs.core.chunk_first.call(null,seq__15720_15734__$1);{
var G__15736 = cljs.core.chunk_rest.call(null,seq__15720_15734__$1);
var G__15737 = c__4148__auto___15735;
var G__15738 = cljs.core.count.call(null,c__4148__auto___15735);
var G__15739 = 0;
seq__15720_15724 = G__15736;
chunk__15721_15725 = G__15737;
count__15722_15726 = G__15738;
i__15723_15727 = G__15739;
continue;
}
} else
{var node_15740 = cljs.core.first.call(null,seq__15720_15734__$1);goog.dom.setTextContent(node_15740,value);
{
var G__15741 = cljs.core.next.call(null,seq__15720_15734__$1);
var G__15742 = null;
var G__15743 = 0;
var G__15744 = 0;
seq__15720_15724 = G__15741;
chunk__15721_15725 = G__15742;
count__15722_15726 = G__15743;
i__15723_15727 = G__15744;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__15749_15753 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15750_15754 = null;var count__15751_15755 = 0;var i__15752_15756 = 0;while(true){
if((i__15752_15756 < count__15751_15755))
{var node_15757 = cljs.core._nth.call(null,chunk__15750_15754,i__15752_15756);goog.dom.forms.setValue(node_15757,value);
{
var G__15758 = seq__15749_15753;
var G__15759 = chunk__15750_15754;
var G__15760 = count__15751_15755;
var G__15761 = (i__15752_15756 + 1);
seq__15749_15753 = G__15758;
chunk__15750_15754 = G__15759;
count__15751_15755 = G__15760;
i__15752_15756 = G__15761;
continue;
}
} else
{var temp__4092__auto___15762 = cljs.core.seq.call(null,seq__15749_15753);if(temp__4092__auto___15762)
{var seq__15749_15763__$1 = temp__4092__auto___15762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15749_15763__$1))
{var c__4148__auto___15764 = cljs.core.chunk_first.call(null,seq__15749_15763__$1);{
var G__15765 = cljs.core.chunk_rest.call(null,seq__15749_15763__$1);
var G__15766 = c__4148__auto___15764;
var G__15767 = cljs.core.count.call(null,c__4148__auto___15764);
var G__15768 = 0;
seq__15749_15753 = G__15765;
chunk__15750_15754 = G__15766;
count__15751_15755 = G__15767;
i__15752_15756 = G__15768;
continue;
}
} else
{var node_15769 = cljs.core.first.call(null,seq__15749_15763__$1);goog.dom.forms.setValue(node_15769,value);
{
var G__15770 = cljs.core.next.call(null,seq__15749_15763__$1);
var G__15771 = null;
var G__15772 = 0;
var G__15773 = 0;
seq__15749_15753 = G__15770;
chunk__15750_15754 = G__15771;
count__15751_15755 = G__15772;
i__15752_15756 = G__15773;
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
{var value_15784 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__15780_15785 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15781_15786 = null;var count__15782_15787 = 0;var i__15783_15788 = 0;while(true){
if((i__15783_15788 < count__15782_15787))
{var node_15789 = cljs.core._nth.call(null,chunk__15781_15786,i__15783_15788);node_15789.innerHTML = value_15784;
{
var G__15790 = seq__15780_15785;
var G__15791 = chunk__15781_15786;
var G__15792 = count__15782_15787;
var G__15793 = (i__15783_15788 + 1);
seq__15780_15785 = G__15790;
chunk__15781_15786 = G__15791;
count__15782_15787 = G__15792;
i__15783_15788 = G__15793;
continue;
}
} else
{var temp__4092__auto___15794 = cljs.core.seq.call(null,seq__15780_15785);if(temp__4092__auto___15794)
{var seq__15780_15795__$1 = temp__4092__auto___15794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15780_15795__$1))
{var c__4148__auto___15796 = cljs.core.chunk_first.call(null,seq__15780_15795__$1);{
var G__15797 = cljs.core.chunk_rest.call(null,seq__15780_15795__$1);
var G__15798 = c__4148__auto___15796;
var G__15799 = cljs.core.count.call(null,c__4148__auto___15796);
var G__15800 = 0;
seq__15780_15785 = G__15797;
chunk__15781_15786 = G__15798;
count__15782_15787 = G__15799;
i__15783_15788 = G__15800;
continue;
}
} else
{var node_15801 = cljs.core.first.call(null,seq__15780_15795__$1);node_15801.innerHTML = value_15784;
{
var G__15802 = cljs.core.next.call(null,seq__15780_15795__$1);
var G__15803 = null;
var G__15804 = 0;
var G__15805 = 0;
seq__15780_15785 = G__15802;
chunk__15781_15786 = G__15803;
count__15782_15787 = G__15804;
i__15783_15788 = G__15805;
continue;
}
}
} else
{}
}
break;
}
}catch (e15779){if((e15779 instanceof Error))
{var e_15806 = e15779;domina.replace_children_BANG_.call(null,content,value_15784);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15779;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__15813_15817 = cljs.core.seq.call(null,children);var chunk__15814_15818 = null;var count__15815_15819 = 0;var i__15816_15820 = 0;while(true){
if((i__15816_15820 < count__15815_15819))
{var child_15821 = cljs.core._nth.call(null,chunk__15814_15818,i__15816_15820);frag.appendChild(child_15821);
{
var G__15822 = seq__15813_15817;
var G__15823 = chunk__15814_15818;
var G__15824 = count__15815_15819;
var G__15825 = (i__15816_15820 + 1);
seq__15813_15817 = G__15822;
chunk__15814_15818 = G__15823;
count__15815_15819 = G__15824;
i__15816_15820 = G__15825;
continue;
}
} else
{var temp__4092__auto___15826 = cljs.core.seq.call(null,seq__15813_15817);if(temp__4092__auto___15826)
{var seq__15813_15827__$1 = temp__4092__auto___15826;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15813_15827__$1))
{var c__4148__auto___15828 = cljs.core.chunk_first.call(null,seq__15813_15827__$1);{
var G__15829 = cljs.core.chunk_rest.call(null,seq__15813_15827__$1);
var G__15830 = c__4148__auto___15828;
var G__15831 = cljs.core.count.call(null,c__4148__auto___15828);
var G__15832 = 0;
seq__15813_15817 = G__15829;
chunk__15814_15818 = G__15830;
count__15815_15819 = G__15831;
i__15816_15820 = G__15832;
continue;
}
} else
{var child_15833 = cljs.core.first.call(null,seq__15813_15827__$1);frag.appendChild(child_15833);
{
var G__15834 = cljs.core.next.call(null,seq__15813_15827__$1);
var G__15835 = null;
var G__15836 = 0;
var G__15837 = 0;
seq__15813_15817 = G__15834;
chunk__15814_15818 = G__15835;
count__15815_15819 = G__15836;
i__15816_15820 = G__15837;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15807_SHARP_,p2__15808_SHARP_){return f.call(null,p1__15807_SHARP_,p2__15808_SHARP_);
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
{if((function (){var G__15839 = list_thing;if(G__15839)
{var bit__4050__auto__ = (G__15839.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15839.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15839.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15839);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15839);
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
{if((function (){var G__15840 = content;if(G__15840)
{var bit__4050__auto__ = (G__15840.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15840.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15840.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15840);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15840);
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
{if((function (){var G__15841 = content;if(G__15841)
{var bit__4050__auto__ = (G__15841.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__15841.cljs$core$ISeqable$))
{return true;
} else
{if((!G__15841.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15841);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__15841);
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