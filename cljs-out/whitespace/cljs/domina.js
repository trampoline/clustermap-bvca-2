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
var opt_wrapper_36453 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36454 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36455 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36454,table_section_wrapper_36454,opt_wrapper_36453,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36455,table_section_wrapper_36454,cell_wrapper_36455,opt_wrapper_36453,table_section_wrapper_36454,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36454]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36460 = cljs.core.seq.call(null,tbody);var chunk__36461 = null;var count__36462 = 0;var i__36463 = 0;while(true){
if((i__36463 < count__36462))
{var child = cljs.core._nth.call(null,chunk__36461,i__36463);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36464 = seq__36460;
var G__36465 = chunk__36461;
var G__36466 = count__36462;
var G__36467 = (i__36463 + 1);
seq__36460 = G__36464;
chunk__36461 = G__36465;
count__36462 = G__36466;
i__36463 = G__36467;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36460);if(temp__4092__auto__)
{var seq__36460__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36460__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36460__$1);{
var G__36468 = cljs.core.chunk_rest.call(null,seq__36460__$1);
var G__36469 = c__4148__auto__;
var G__36470 = cljs.core.count.call(null,c__4148__auto__);
var G__36471 = 0;
seq__36460 = G__36468;
chunk__36461 = G__36469;
count__36462 = G__36470;
i__36463 = G__36471;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36460__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36472 = cljs.core.next.call(null,seq__36460__$1);
var G__36473 = null;
var G__36474 = 0;
var G__36475 = 0;
seq__36460 = G__36472;
chunk__36461 = G__36473;
count__36462 = G__36474;
i__36463 = G__36475;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36477 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36477,0,null);var start_wrap = cljs.core.nth.call(null,vec__36477,1,null);var end_wrap = cljs.core.nth.call(null,vec__36477,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36478 = wrapper.lastChild;
var G__36479 = (level - 1);
wrapper = G__36478;
level = G__36479;
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
domina.DomContent = (function (){var obj36481 = {};return obj36481;
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
log_debug.cljs$lang$applyTo = (function (arglist__36482){
var mesg = cljs.core.seq(arglist__36482);
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
log.cljs$lang$applyTo = (function (arglist__36483){
var mesg = cljs.core.seq(arglist__36483);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36484){
var contents = cljs.core.seq(arglist__36484);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36485_SHARP_){return p1__36485_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36486_SHARP_,p2__36487_SHARP_){return goog.dom.insertChildAt(p1__36486_SHARP_,p2__36487_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36489_SHARP_,p2__36488_SHARP_){return goog.dom.insertSiblingBefore(p2__36488_SHARP_,p1__36489_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36491_SHARP_,p2__36490_SHARP_){return goog.dom.insertSiblingAfter(p2__36490_SHARP_,p1__36491_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36493_SHARP_,p2__36492_SHARP_){return goog.dom.replaceNode(p2__36492_SHARP_,p1__36493_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36498_36502 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36499_36503 = null;var count__36500_36504 = 0;var i__36501_36505 = 0;while(true){
if((i__36501_36505 < count__36500_36504))
{var n_36506 = cljs.core._nth.call(null,chunk__36499_36503,i__36501_36505);goog.style.setStyle(n_36506,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36507 = seq__36498_36502;
var G__36508 = chunk__36499_36503;
var G__36509 = count__36500_36504;
var G__36510 = (i__36501_36505 + 1);
seq__36498_36502 = G__36507;
chunk__36499_36503 = G__36508;
count__36500_36504 = G__36509;
i__36501_36505 = G__36510;
continue;
}
} else
{var temp__4092__auto___36511 = cljs.core.seq.call(null,seq__36498_36502);if(temp__4092__auto___36511)
{var seq__36498_36512__$1 = temp__4092__auto___36511;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36498_36512__$1))
{var c__4148__auto___36513 = cljs.core.chunk_first.call(null,seq__36498_36512__$1);{
var G__36514 = cljs.core.chunk_rest.call(null,seq__36498_36512__$1);
var G__36515 = c__4148__auto___36513;
var G__36516 = cljs.core.count.call(null,c__4148__auto___36513);
var G__36517 = 0;
seq__36498_36502 = G__36514;
chunk__36499_36503 = G__36515;
count__36500_36504 = G__36516;
i__36501_36505 = G__36517;
continue;
}
} else
{var n_36518 = cljs.core.first.call(null,seq__36498_36512__$1);goog.style.setStyle(n_36518,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36519 = cljs.core.next.call(null,seq__36498_36512__$1);
var G__36520 = null;
var G__36521 = 0;
var G__36522 = 0;
seq__36498_36502 = G__36519;
chunk__36499_36503 = G__36520;
count__36500_36504 = G__36521;
i__36501_36505 = G__36522;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36523){
var content = cljs.core.first(arglist__36523);
arglist__36523 = cljs.core.next(arglist__36523);
var name = cljs.core.first(arglist__36523);
var value = cljs.core.rest(arglist__36523);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36528_36532 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36529_36533 = null;var count__36530_36534 = 0;var i__36531_36535 = 0;while(true){
if((i__36531_36535 < count__36530_36534))
{var n_36536 = cljs.core._nth.call(null,chunk__36529_36533,i__36531_36535);n_36536.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36537 = seq__36528_36532;
var G__36538 = chunk__36529_36533;
var G__36539 = count__36530_36534;
var G__36540 = (i__36531_36535 + 1);
seq__36528_36532 = G__36537;
chunk__36529_36533 = G__36538;
count__36530_36534 = G__36539;
i__36531_36535 = G__36540;
continue;
}
} else
{var temp__4092__auto___36541 = cljs.core.seq.call(null,seq__36528_36532);if(temp__4092__auto___36541)
{var seq__36528_36542__$1 = temp__4092__auto___36541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36528_36542__$1))
{var c__4148__auto___36543 = cljs.core.chunk_first.call(null,seq__36528_36542__$1);{
var G__36544 = cljs.core.chunk_rest.call(null,seq__36528_36542__$1);
var G__36545 = c__4148__auto___36543;
var G__36546 = cljs.core.count.call(null,c__4148__auto___36543);
var G__36547 = 0;
seq__36528_36532 = G__36544;
chunk__36529_36533 = G__36545;
count__36530_36534 = G__36546;
i__36531_36535 = G__36547;
continue;
}
} else
{var n_36548 = cljs.core.first.call(null,seq__36528_36542__$1);n_36548.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36549 = cljs.core.next.call(null,seq__36528_36542__$1);
var G__36550 = null;
var G__36551 = 0;
var G__36552 = 0;
seq__36528_36532 = G__36549;
chunk__36529_36533 = G__36550;
count__36530_36534 = G__36551;
i__36531_36535 = G__36552;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36553){
var content = cljs.core.first(arglist__36553);
arglist__36553 = cljs.core.next(arglist__36553);
var name = cljs.core.first(arglist__36553);
var value = cljs.core.rest(arglist__36553);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36558_36562 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36559_36563 = null;var count__36560_36564 = 0;var i__36561_36565 = 0;while(true){
if((i__36561_36565 < count__36560_36564))
{var n_36566 = cljs.core._nth.call(null,chunk__36559_36563,i__36561_36565);n_36566.removeAttribute(cljs.core.name.call(null,name));
{
var G__36567 = seq__36558_36562;
var G__36568 = chunk__36559_36563;
var G__36569 = count__36560_36564;
var G__36570 = (i__36561_36565 + 1);
seq__36558_36562 = G__36567;
chunk__36559_36563 = G__36568;
count__36560_36564 = G__36569;
i__36561_36565 = G__36570;
continue;
}
} else
{var temp__4092__auto___36571 = cljs.core.seq.call(null,seq__36558_36562);if(temp__4092__auto___36571)
{var seq__36558_36572__$1 = temp__4092__auto___36571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36558_36572__$1))
{var c__4148__auto___36573 = cljs.core.chunk_first.call(null,seq__36558_36572__$1);{
var G__36574 = cljs.core.chunk_rest.call(null,seq__36558_36572__$1);
var G__36575 = c__4148__auto___36573;
var G__36576 = cljs.core.count.call(null,c__4148__auto___36573);
var G__36577 = 0;
seq__36558_36562 = G__36574;
chunk__36559_36563 = G__36575;
count__36560_36564 = G__36576;
i__36561_36565 = G__36577;
continue;
}
} else
{var n_36578 = cljs.core.first.call(null,seq__36558_36572__$1);n_36578.removeAttribute(cljs.core.name.call(null,name));
{
var G__36579 = cljs.core.next.call(null,seq__36558_36572__$1);
var G__36580 = null;
var G__36581 = 0;
var G__36582 = 0;
seq__36558_36562 = G__36579;
chunk__36559_36563 = G__36580;
count__36560_36564 = G__36581;
i__36561_36565 = G__36582;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36584 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36584,0,null);var v = cljs.core.nth.call(null,vec__36584,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36585_SHARP_){var attr = attrs__$1.item(p1__36585_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36592_36598 = cljs.core.seq.call(null,styles);var chunk__36593_36599 = null;var count__36594_36600 = 0;var i__36595_36601 = 0;while(true){
if((i__36595_36601 < count__36594_36600))
{var vec__36596_36602 = cljs.core._nth.call(null,chunk__36593_36599,i__36595_36601);var name_36603 = cljs.core.nth.call(null,vec__36596_36602,0,null);var value_36604 = cljs.core.nth.call(null,vec__36596_36602,1,null);domina.set_style_BANG_.call(null,content,name_36603,value_36604);
{
var G__36605 = seq__36592_36598;
var G__36606 = chunk__36593_36599;
var G__36607 = count__36594_36600;
var G__36608 = (i__36595_36601 + 1);
seq__36592_36598 = G__36605;
chunk__36593_36599 = G__36606;
count__36594_36600 = G__36607;
i__36595_36601 = G__36608;
continue;
}
} else
{var temp__4092__auto___36609 = cljs.core.seq.call(null,seq__36592_36598);if(temp__4092__auto___36609)
{var seq__36592_36610__$1 = temp__4092__auto___36609;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36592_36610__$1))
{var c__4148__auto___36611 = cljs.core.chunk_first.call(null,seq__36592_36610__$1);{
var G__36612 = cljs.core.chunk_rest.call(null,seq__36592_36610__$1);
var G__36613 = c__4148__auto___36611;
var G__36614 = cljs.core.count.call(null,c__4148__auto___36611);
var G__36615 = 0;
seq__36592_36598 = G__36612;
chunk__36593_36599 = G__36613;
count__36594_36600 = G__36614;
i__36595_36601 = G__36615;
continue;
}
} else
{var vec__36597_36616 = cljs.core.first.call(null,seq__36592_36610__$1);var name_36617 = cljs.core.nth.call(null,vec__36597_36616,0,null);var value_36618 = cljs.core.nth.call(null,vec__36597_36616,1,null);domina.set_style_BANG_.call(null,content,name_36617,value_36618);
{
var G__36619 = cljs.core.next.call(null,seq__36592_36610__$1);
var G__36620 = null;
var G__36621 = 0;
var G__36622 = 0;
seq__36592_36598 = G__36619;
chunk__36593_36599 = G__36620;
count__36594_36600 = G__36621;
i__36595_36601 = G__36622;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36629_36635 = cljs.core.seq.call(null,attrs);var chunk__36630_36636 = null;var count__36631_36637 = 0;var i__36632_36638 = 0;while(true){
if((i__36632_36638 < count__36631_36637))
{var vec__36633_36639 = cljs.core._nth.call(null,chunk__36630_36636,i__36632_36638);var name_36640 = cljs.core.nth.call(null,vec__36633_36639,0,null);var value_36641 = cljs.core.nth.call(null,vec__36633_36639,1,null);domina.set_attr_BANG_.call(null,content,name_36640,value_36641);
{
var G__36642 = seq__36629_36635;
var G__36643 = chunk__36630_36636;
var G__36644 = count__36631_36637;
var G__36645 = (i__36632_36638 + 1);
seq__36629_36635 = G__36642;
chunk__36630_36636 = G__36643;
count__36631_36637 = G__36644;
i__36632_36638 = G__36645;
continue;
}
} else
{var temp__4092__auto___36646 = cljs.core.seq.call(null,seq__36629_36635);if(temp__4092__auto___36646)
{var seq__36629_36647__$1 = temp__4092__auto___36646;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36629_36647__$1))
{var c__4148__auto___36648 = cljs.core.chunk_first.call(null,seq__36629_36647__$1);{
var G__36649 = cljs.core.chunk_rest.call(null,seq__36629_36647__$1);
var G__36650 = c__4148__auto___36648;
var G__36651 = cljs.core.count.call(null,c__4148__auto___36648);
var G__36652 = 0;
seq__36629_36635 = G__36649;
chunk__36630_36636 = G__36650;
count__36631_36637 = G__36651;
i__36632_36638 = G__36652;
continue;
}
} else
{var vec__36634_36653 = cljs.core.first.call(null,seq__36629_36647__$1);var name_36654 = cljs.core.nth.call(null,vec__36634_36653,0,null);var value_36655 = cljs.core.nth.call(null,vec__36634_36653,1,null);domina.set_attr_BANG_.call(null,content,name_36654,value_36655);
{
var G__36656 = cljs.core.next.call(null,seq__36629_36647__$1);
var G__36657 = null;
var G__36658 = 0;
var G__36659 = 0;
seq__36629_36635 = G__36656;
chunk__36630_36636 = G__36657;
count__36631_36637 = G__36658;
i__36632_36638 = G__36659;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__36664_36668 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36665_36669 = null;var count__36666_36670 = 0;var i__36667_36671 = 0;while(true){
if((i__36667_36671 < count__36666_36670))
{var node_36672 = cljs.core._nth.call(null,chunk__36665_36669,i__36667_36671);goog.dom.classes.add(node_36672,class$);
{
var G__36673 = seq__36664_36668;
var G__36674 = chunk__36665_36669;
var G__36675 = count__36666_36670;
var G__36676 = (i__36667_36671 + 1);
seq__36664_36668 = G__36673;
chunk__36665_36669 = G__36674;
count__36666_36670 = G__36675;
i__36667_36671 = G__36676;
continue;
}
} else
{var temp__4092__auto___36677 = cljs.core.seq.call(null,seq__36664_36668);if(temp__4092__auto___36677)
{var seq__36664_36678__$1 = temp__4092__auto___36677;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36664_36678__$1))
{var c__4148__auto___36679 = cljs.core.chunk_first.call(null,seq__36664_36678__$1);{
var G__36680 = cljs.core.chunk_rest.call(null,seq__36664_36678__$1);
var G__36681 = c__4148__auto___36679;
var G__36682 = cljs.core.count.call(null,c__4148__auto___36679);
var G__36683 = 0;
seq__36664_36668 = G__36680;
chunk__36665_36669 = G__36681;
count__36666_36670 = G__36682;
i__36667_36671 = G__36683;
continue;
}
} else
{var node_36684 = cljs.core.first.call(null,seq__36664_36678__$1);goog.dom.classes.add(node_36684,class$);
{
var G__36685 = cljs.core.next.call(null,seq__36664_36678__$1);
var G__36686 = null;
var G__36687 = 0;
var G__36688 = 0;
seq__36664_36668 = G__36685;
chunk__36665_36669 = G__36686;
count__36666_36670 = G__36687;
i__36667_36671 = G__36688;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__36693_36697 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36694_36698 = null;var count__36695_36699 = 0;var i__36696_36700 = 0;while(true){
if((i__36696_36700 < count__36695_36699))
{var node_36701 = cljs.core._nth.call(null,chunk__36694_36698,i__36696_36700);goog.dom.classes.remove(node_36701,class$);
{
var G__36702 = seq__36693_36697;
var G__36703 = chunk__36694_36698;
var G__36704 = count__36695_36699;
var G__36705 = (i__36696_36700 + 1);
seq__36693_36697 = G__36702;
chunk__36694_36698 = G__36703;
count__36695_36699 = G__36704;
i__36696_36700 = G__36705;
continue;
}
} else
{var temp__4092__auto___36706 = cljs.core.seq.call(null,seq__36693_36697);if(temp__4092__auto___36706)
{var seq__36693_36707__$1 = temp__4092__auto___36706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36693_36707__$1))
{var c__4148__auto___36708 = cljs.core.chunk_first.call(null,seq__36693_36707__$1);{
var G__36709 = cljs.core.chunk_rest.call(null,seq__36693_36707__$1);
var G__36710 = c__4148__auto___36708;
var G__36711 = cljs.core.count.call(null,c__4148__auto___36708);
var G__36712 = 0;
seq__36693_36697 = G__36709;
chunk__36694_36698 = G__36710;
count__36695_36699 = G__36711;
i__36696_36700 = G__36712;
continue;
}
} else
{var node_36713 = cljs.core.first.call(null,seq__36693_36707__$1);goog.dom.classes.remove(node_36713,class$);
{
var G__36714 = cljs.core.next.call(null,seq__36693_36707__$1);
var G__36715 = null;
var G__36716 = 0;
var G__36717 = 0;
seq__36693_36697 = G__36714;
chunk__36694_36698 = G__36715;
count__36695_36699 = G__36716;
i__36696_36700 = G__36717;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__36722_36726 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36723_36727 = null;var count__36724_36728 = 0;var i__36725_36729 = 0;while(true){
if((i__36725_36729 < count__36724_36728))
{var node_36730 = cljs.core._nth.call(null,chunk__36723_36727,i__36725_36729);goog.dom.classes.toggle(node_36730,class$);
{
var G__36731 = seq__36722_36726;
var G__36732 = chunk__36723_36727;
var G__36733 = count__36724_36728;
var G__36734 = (i__36725_36729 + 1);
seq__36722_36726 = G__36731;
chunk__36723_36727 = G__36732;
count__36724_36728 = G__36733;
i__36725_36729 = G__36734;
continue;
}
} else
{var temp__4092__auto___36735 = cljs.core.seq.call(null,seq__36722_36726);if(temp__4092__auto___36735)
{var seq__36722_36736__$1 = temp__4092__auto___36735;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36722_36736__$1))
{var c__4148__auto___36737 = cljs.core.chunk_first.call(null,seq__36722_36736__$1);{
var G__36738 = cljs.core.chunk_rest.call(null,seq__36722_36736__$1);
var G__36739 = c__4148__auto___36737;
var G__36740 = cljs.core.count.call(null,c__4148__auto___36737);
var G__36741 = 0;
seq__36722_36726 = G__36738;
chunk__36723_36727 = G__36739;
count__36724_36728 = G__36740;
i__36725_36729 = G__36741;
continue;
}
} else
{var node_36742 = cljs.core.first.call(null,seq__36722_36736__$1);goog.dom.classes.toggle(node_36742,class$);
{
var G__36743 = cljs.core.next.call(null,seq__36722_36736__$1);
var G__36744 = null;
var G__36745 = 0;
var G__36746 = 0;
seq__36722_36726 = G__36743;
chunk__36723_36727 = G__36744;
count__36724_36728 = G__36745;
i__36725_36729 = G__36746;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_36755__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__36751_36756 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36752_36757 = null;var count__36753_36758 = 0;var i__36754_36759 = 0;while(true){
if((i__36754_36759 < count__36753_36758))
{var node_36760 = cljs.core._nth.call(null,chunk__36752_36757,i__36754_36759);goog.dom.classes.set(node_36760,classes_36755__$1);
{
var G__36761 = seq__36751_36756;
var G__36762 = chunk__36752_36757;
var G__36763 = count__36753_36758;
var G__36764 = (i__36754_36759 + 1);
seq__36751_36756 = G__36761;
chunk__36752_36757 = G__36762;
count__36753_36758 = G__36763;
i__36754_36759 = G__36764;
continue;
}
} else
{var temp__4092__auto___36765 = cljs.core.seq.call(null,seq__36751_36756);if(temp__4092__auto___36765)
{var seq__36751_36766__$1 = temp__4092__auto___36765;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36751_36766__$1))
{var c__4148__auto___36767 = cljs.core.chunk_first.call(null,seq__36751_36766__$1);{
var G__36768 = cljs.core.chunk_rest.call(null,seq__36751_36766__$1);
var G__36769 = c__4148__auto___36767;
var G__36770 = cljs.core.count.call(null,c__4148__auto___36767);
var G__36771 = 0;
seq__36751_36756 = G__36768;
chunk__36752_36757 = G__36769;
count__36753_36758 = G__36770;
i__36754_36759 = G__36771;
continue;
}
} else
{var node_36772 = cljs.core.first.call(null,seq__36751_36766__$1);goog.dom.classes.set(node_36772,classes_36755__$1);
{
var G__36773 = cljs.core.next.call(null,seq__36751_36766__$1);
var G__36774 = null;
var G__36775 = 0;
var G__36776 = 0;
seq__36751_36756 = G__36773;
chunk__36752_36757 = G__36774;
count__36753_36758 = G__36775;
i__36754_36759 = G__36776;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__36781_36785 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36782_36786 = null;var count__36783_36787 = 0;var i__36784_36788 = 0;while(true){
if((i__36784_36788 < count__36783_36787))
{var node_36789 = cljs.core._nth.call(null,chunk__36782_36786,i__36784_36788);goog.dom.setTextContent(node_36789,value);
{
var G__36790 = seq__36781_36785;
var G__36791 = chunk__36782_36786;
var G__36792 = count__36783_36787;
var G__36793 = (i__36784_36788 + 1);
seq__36781_36785 = G__36790;
chunk__36782_36786 = G__36791;
count__36783_36787 = G__36792;
i__36784_36788 = G__36793;
continue;
}
} else
{var temp__4092__auto___36794 = cljs.core.seq.call(null,seq__36781_36785);if(temp__4092__auto___36794)
{var seq__36781_36795__$1 = temp__4092__auto___36794;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36781_36795__$1))
{var c__4148__auto___36796 = cljs.core.chunk_first.call(null,seq__36781_36795__$1);{
var G__36797 = cljs.core.chunk_rest.call(null,seq__36781_36795__$1);
var G__36798 = c__4148__auto___36796;
var G__36799 = cljs.core.count.call(null,c__4148__auto___36796);
var G__36800 = 0;
seq__36781_36785 = G__36797;
chunk__36782_36786 = G__36798;
count__36783_36787 = G__36799;
i__36784_36788 = G__36800;
continue;
}
} else
{var node_36801 = cljs.core.first.call(null,seq__36781_36795__$1);goog.dom.setTextContent(node_36801,value);
{
var G__36802 = cljs.core.next.call(null,seq__36781_36795__$1);
var G__36803 = null;
var G__36804 = 0;
var G__36805 = 0;
seq__36781_36785 = G__36802;
chunk__36782_36786 = G__36803;
count__36783_36787 = G__36804;
i__36784_36788 = G__36805;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__36810_36814 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36811_36815 = null;var count__36812_36816 = 0;var i__36813_36817 = 0;while(true){
if((i__36813_36817 < count__36812_36816))
{var node_36818 = cljs.core._nth.call(null,chunk__36811_36815,i__36813_36817);goog.dom.forms.setValue(node_36818,value);
{
var G__36819 = seq__36810_36814;
var G__36820 = chunk__36811_36815;
var G__36821 = count__36812_36816;
var G__36822 = (i__36813_36817 + 1);
seq__36810_36814 = G__36819;
chunk__36811_36815 = G__36820;
count__36812_36816 = G__36821;
i__36813_36817 = G__36822;
continue;
}
} else
{var temp__4092__auto___36823 = cljs.core.seq.call(null,seq__36810_36814);if(temp__4092__auto___36823)
{var seq__36810_36824__$1 = temp__4092__auto___36823;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36810_36824__$1))
{var c__4148__auto___36825 = cljs.core.chunk_first.call(null,seq__36810_36824__$1);{
var G__36826 = cljs.core.chunk_rest.call(null,seq__36810_36824__$1);
var G__36827 = c__4148__auto___36825;
var G__36828 = cljs.core.count.call(null,c__4148__auto___36825);
var G__36829 = 0;
seq__36810_36814 = G__36826;
chunk__36811_36815 = G__36827;
count__36812_36816 = G__36828;
i__36813_36817 = G__36829;
continue;
}
} else
{var node_36830 = cljs.core.first.call(null,seq__36810_36824__$1);goog.dom.forms.setValue(node_36830,value);
{
var G__36831 = cljs.core.next.call(null,seq__36810_36824__$1);
var G__36832 = null;
var G__36833 = 0;
var G__36834 = 0;
seq__36810_36814 = G__36831;
chunk__36811_36815 = G__36832;
count__36812_36816 = G__36833;
i__36813_36817 = G__36834;
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
{var value_36845 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__36841_36846 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36842_36847 = null;var count__36843_36848 = 0;var i__36844_36849 = 0;while(true){
if((i__36844_36849 < count__36843_36848))
{var node_36850 = cljs.core._nth.call(null,chunk__36842_36847,i__36844_36849);node_36850.innerHTML = value_36845;
{
var G__36851 = seq__36841_36846;
var G__36852 = chunk__36842_36847;
var G__36853 = count__36843_36848;
var G__36854 = (i__36844_36849 + 1);
seq__36841_36846 = G__36851;
chunk__36842_36847 = G__36852;
count__36843_36848 = G__36853;
i__36844_36849 = G__36854;
continue;
}
} else
{var temp__4092__auto___36855 = cljs.core.seq.call(null,seq__36841_36846);if(temp__4092__auto___36855)
{var seq__36841_36856__$1 = temp__4092__auto___36855;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36841_36856__$1))
{var c__4148__auto___36857 = cljs.core.chunk_first.call(null,seq__36841_36856__$1);{
var G__36858 = cljs.core.chunk_rest.call(null,seq__36841_36856__$1);
var G__36859 = c__4148__auto___36857;
var G__36860 = cljs.core.count.call(null,c__4148__auto___36857);
var G__36861 = 0;
seq__36841_36846 = G__36858;
chunk__36842_36847 = G__36859;
count__36843_36848 = G__36860;
i__36844_36849 = G__36861;
continue;
}
} else
{var node_36862 = cljs.core.first.call(null,seq__36841_36856__$1);node_36862.innerHTML = value_36845;
{
var G__36863 = cljs.core.next.call(null,seq__36841_36856__$1);
var G__36864 = null;
var G__36865 = 0;
var G__36866 = 0;
seq__36841_36846 = G__36863;
chunk__36842_36847 = G__36864;
count__36843_36848 = G__36865;
i__36844_36849 = G__36866;
continue;
}
}
} else
{}
}
break;
}
}catch (e36840){if((e36840 instanceof Error))
{var e_36867 = e36840;domina.replace_children_BANG_.call(null,content,value_36845);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36840;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__36874_36878 = cljs.core.seq.call(null,children);var chunk__36875_36879 = null;var count__36876_36880 = 0;var i__36877_36881 = 0;while(true){
if((i__36877_36881 < count__36876_36880))
{var child_36882 = cljs.core._nth.call(null,chunk__36875_36879,i__36877_36881);frag.appendChild(child_36882);
{
var G__36883 = seq__36874_36878;
var G__36884 = chunk__36875_36879;
var G__36885 = count__36876_36880;
var G__36886 = (i__36877_36881 + 1);
seq__36874_36878 = G__36883;
chunk__36875_36879 = G__36884;
count__36876_36880 = G__36885;
i__36877_36881 = G__36886;
continue;
}
} else
{var temp__4092__auto___36887 = cljs.core.seq.call(null,seq__36874_36878);if(temp__4092__auto___36887)
{var seq__36874_36888__$1 = temp__4092__auto___36887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36874_36888__$1))
{var c__4148__auto___36889 = cljs.core.chunk_first.call(null,seq__36874_36888__$1);{
var G__36890 = cljs.core.chunk_rest.call(null,seq__36874_36888__$1);
var G__36891 = c__4148__auto___36889;
var G__36892 = cljs.core.count.call(null,c__4148__auto___36889);
var G__36893 = 0;
seq__36874_36878 = G__36890;
chunk__36875_36879 = G__36891;
count__36876_36880 = G__36892;
i__36877_36881 = G__36893;
continue;
}
} else
{var child_36894 = cljs.core.first.call(null,seq__36874_36888__$1);frag.appendChild(child_36894);
{
var G__36895 = cljs.core.next.call(null,seq__36874_36888__$1);
var G__36896 = null;
var G__36897 = 0;
var G__36898 = 0;
seq__36874_36878 = G__36895;
chunk__36875_36879 = G__36896;
count__36876_36880 = G__36897;
i__36877_36881 = G__36898;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__36868_SHARP_,p2__36869_SHARP_){return f.call(null,p1__36868_SHARP_,p2__36869_SHARP_);
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
{if((function (){var G__36900 = list_thing;if(G__36900)
{var bit__4050__auto__ = (G__36900.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36900.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36900.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36900);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36900);
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
{if((function (){var G__36901 = content;if(G__36901)
{var bit__4050__auto__ = (G__36901.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36901.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36901.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36901);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36901);
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
{if((function (){var G__36902 = content;if(G__36902)
{var bit__4050__auto__ = (G__36902.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__36902.cljs$core$ISeqable$))
{return true;
} else
{if((!G__36902.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36902);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__36902);
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
