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
var opt_wrapper_16604 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16605 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16606 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16605,table_section_wrapper_16605,opt_wrapper_16604,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16606,table_section_wrapper_16605,cell_wrapper_16606,opt_wrapper_16604,table_section_wrapper_16605,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16605]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16611 = cljs.core.seq.call(null,tbody);var chunk__16612 = null;var count__16613 = 0;var i__16614 = 0;while(true){
if((i__16614 < count__16613))
{var child = cljs.core._nth.call(null,chunk__16612,i__16614);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16615 = seq__16611;
var G__16616 = chunk__16612;
var G__16617 = count__16613;
var G__16618 = (i__16614 + 1);
seq__16611 = G__16615;
chunk__16612 = G__16616;
count__16613 = G__16617;
i__16614 = G__16618;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16611);if(temp__4092__auto__)
{var seq__16611__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16611__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16611__$1);{
var G__16619 = cljs.core.chunk_rest.call(null,seq__16611__$1);
var G__16620 = c__4148__auto__;
var G__16621 = cljs.core.count.call(null,c__4148__auto__);
var G__16622 = 0;
seq__16611 = G__16619;
chunk__16612 = G__16620;
count__16613 = G__16621;
i__16614 = G__16622;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16611__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16623 = cljs.core.next.call(null,seq__16611__$1);
var G__16624 = null;
var G__16625 = 0;
var G__16626 = 0;
seq__16611 = G__16623;
chunk__16612 = G__16624;
count__16613 = G__16625;
i__16614 = G__16626;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16628 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16628,0,null);var start_wrap = cljs.core.nth.call(null,vec__16628,1,null);var end_wrap = cljs.core.nth.call(null,vec__16628,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16629 = wrapper.lastChild;
var G__16630 = (level - 1);
wrapper = G__16629;
level = G__16630;
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
domina.DomContent = (function (){var obj16632 = {};return obj16632;
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
log_debug.cljs$lang$applyTo = (function (arglist__16633){
var mesg = cljs.core.seq(arglist__16633);
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
log.cljs$lang$applyTo = (function (arglist__16634){
var mesg = cljs.core.seq(arglist__16634);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16635){
var contents = cljs.core.seq(arglist__16635);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16636_SHARP_){return p1__16636_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16637_SHARP_,p2__16638_SHARP_){return goog.dom.insertChildAt(p1__16637_SHARP_,p2__16638_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16640_SHARP_,p2__16639_SHARP_){return goog.dom.insertSiblingBefore(p2__16639_SHARP_,p1__16640_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16642_SHARP_,p2__16641_SHARP_){return goog.dom.insertSiblingAfter(p2__16641_SHARP_,p1__16642_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16644_SHARP_,p2__16643_SHARP_){return goog.dom.replaceNode(p2__16643_SHARP_,p1__16644_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16649_16653 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16650_16654 = null;var count__16651_16655 = 0;var i__16652_16656 = 0;while(true){
if((i__16652_16656 < count__16651_16655))
{var n_16657 = cljs.core._nth.call(null,chunk__16650_16654,i__16652_16656);goog.style.setStyle(n_16657,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16658 = seq__16649_16653;
var G__16659 = chunk__16650_16654;
var G__16660 = count__16651_16655;
var G__16661 = (i__16652_16656 + 1);
seq__16649_16653 = G__16658;
chunk__16650_16654 = G__16659;
count__16651_16655 = G__16660;
i__16652_16656 = G__16661;
continue;
}
} else
{var temp__4092__auto___16662 = cljs.core.seq.call(null,seq__16649_16653);if(temp__4092__auto___16662)
{var seq__16649_16663__$1 = temp__4092__auto___16662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16649_16663__$1))
{var c__4148__auto___16664 = cljs.core.chunk_first.call(null,seq__16649_16663__$1);{
var G__16665 = cljs.core.chunk_rest.call(null,seq__16649_16663__$1);
var G__16666 = c__4148__auto___16664;
var G__16667 = cljs.core.count.call(null,c__4148__auto___16664);
var G__16668 = 0;
seq__16649_16653 = G__16665;
chunk__16650_16654 = G__16666;
count__16651_16655 = G__16667;
i__16652_16656 = G__16668;
continue;
}
} else
{var n_16669 = cljs.core.first.call(null,seq__16649_16663__$1);goog.style.setStyle(n_16669,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16670 = cljs.core.next.call(null,seq__16649_16663__$1);
var G__16671 = null;
var G__16672 = 0;
var G__16673 = 0;
seq__16649_16653 = G__16670;
chunk__16650_16654 = G__16671;
count__16651_16655 = G__16672;
i__16652_16656 = G__16673;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16674){
var content = cljs.core.first(arglist__16674);
arglist__16674 = cljs.core.next(arglist__16674);
var name = cljs.core.first(arglist__16674);
var value = cljs.core.rest(arglist__16674);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16679_16683 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16680_16684 = null;var count__16681_16685 = 0;var i__16682_16686 = 0;while(true){
if((i__16682_16686 < count__16681_16685))
{var n_16687 = cljs.core._nth.call(null,chunk__16680_16684,i__16682_16686);n_16687.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16688 = seq__16679_16683;
var G__16689 = chunk__16680_16684;
var G__16690 = count__16681_16685;
var G__16691 = (i__16682_16686 + 1);
seq__16679_16683 = G__16688;
chunk__16680_16684 = G__16689;
count__16681_16685 = G__16690;
i__16682_16686 = G__16691;
continue;
}
} else
{var temp__4092__auto___16692 = cljs.core.seq.call(null,seq__16679_16683);if(temp__4092__auto___16692)
{var seq__16679_16693__$1 = temp__4092__auto___16692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16679_16693__$1))
{var c__4148__auto___16694 = cljs.core.chunk_first.call(null,seq__16679_16693__$1);{
var G__16695 = cljs.core.chunk_rest.call(null,seq__16679_16693__$1);
var G__16696 = c__4148__auto___16694;
var G__16697 = cljs.core.count.call(null,c__4148__auto___16694);
var G__16698 = 0;
seq__16679_16683 = G__16695;
chunk__16680_16684 = G__16696;
count__16681_16685 = G__16697;
i__16682_16686 = G__16698;
continue;
}
} else
{var n_16699 = cljs.core.first.call(null,seq__16679_16693__$1);n_16699.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16700 = cljs.core.next.call(null,seq__16679_16693__$1);
var G__16701 = null;
var G__16702 = 0;
var G__16703 = 0;
seq__16679_16683 = G__16700;
chunk__16680_16684 = G__16701;
count__16681_16685 = G__16702;
i__16682_16686 = G__16703;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16704){
var content = cljs.core.first(arglist__16704);
arglist__16704 = cljs.core.next(arglist__16704);
var name = cljs.core.first(arglist__16704);
var value = cljs.core.rest(arglist__16704);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16709_16713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16710_16714 = null;var count__16711_16715 = 0;var i__16712_16716 = 0;while(true){
if((i__16712_16716 < count__16711_16715))
{var n_16717 = cljs.core._nth.call(null,chunk__16710_16714,i__16712_16716);n_16717.removeAttribute(cljs.core.name.call(null,name));
{
var G__16718 = seq__16709_16713;
var G__16719 = chunk__16710_16714;
var G__16720 = count__16711_16715;
var G__16721 = (i__16712_16716 + 1);
seq__16709_16713 = G__16718;
chunk__16710_16714 = G__16719;
count__16711_16715 = G__16720;
i__16712_16716 = G__16721;
continue;
}
} else
{var temp__4092__auto___16722 = cljs.core.seq.call(null,seq__16709_16713);if(temp__4092__auto___16722)
{var seq__16709_16723__$1 = temp__4092__auto___16722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16709_16723__$1))
{var c__4148__auto___16724 = cljs.core.chunk_first.call(null,seq__16709_16723__$1);{
var G__16725 = cljs.core.chunk_rest.call(null,seq__16709_16723__$1);
var G__16726 = c__4148__auto___16724;
var G__16727 = cljs.core.count.call(null,c__4148__auto___16724);
var G__16728 = 0;
seq__16709_16713 = G__16725;
chunk__16710_16714 = G__16726;
count__16711_16715 = G__16727;
i__16712_16716 = G__16728;
continue;
}
} else
{var n_16729 = cljs.core.first.call(null,seq__16709_16723__$1);n_16729.removeAttribute(cljs.core.name.call(null,name));
{
var G__16730 = cljs.core.next.call(null,seq__16709_16723__$1);
var G__16731 = null;
var G__16732 = 0;
var G__16733 = 0;
seq__16709_16713 = G__16730;
chunk__16710_16714 = G__16731;
count__16711_16715 = G__16732;
i__16712_16716 = G__16733;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16735 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16735,0,null);var v = cljs.core.nth.call(null,vec__16735,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16736_SHARP_){var attr = attrs__$1.item(p1__16736_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16743_16749 = cljs.core.seq.call(null,styles);var chunk__16744_16750 = null;var count__16745_16751 = 0;var i__16746_16752 = 0;while(true){
if((i__16746_16752 < count__16745_16751))
{var vec__16747_16753 = cljs.core._nth.call(null,chunk__16744_16750,i__16746_16752);var name_16754 = cljs.core.nth.call(null,vec__16747_16753,0,null);var value_16755 = cljs.core.nth.call(null,vec__16747_16753,1,null);domina.set_style_BANG_.call(null,content,name_16754,value_16755);
{
var G__16756 = seq__16743_16749;
var G__16757 = chunk__16744_16750;
var G__16758 = count__16745_16751;
var G__16759 = (i__16746_16752 + 1);
seq__16743_16749 = G__16756;
chunk__16744_16750 = G__16757;
count__16745_16751 = G__16758;
i__16746_16752 = G__16759;
continue;
}
} else
{var temp__4092__auto___16760 = cljs.core.seq.call(null,seq__16743_16749);if(temp__4092__auto___16760)
{var seq__16743_16761__$1 = temp__4092__auto___16760;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16743_16761__$1))
{var c__4148__auto___16762 = cljs.core.chunk_first.call(null,seq__16743_16761__$1);{
var G__16763 = cljs.core.chunk_rest.call(null,seq__16743_16761__$1);
var G__16764 = c__4148__auto___16762;
var G__16765 = cljs.core.count.call(null,c__4148__auto___16762);
var G__16766 = 0;
seq__16743_16749 = G__16763;
chunk__16744_16750 = G__16764;
count__16745_16751 = G__16765;
i__16746_16752 = G__16766;
continue;
}
} else
{var vec__16748_16767 = cljs.core.first.call(null,seq__16743_16761__$1);var name_16768 = cljs.core.nth.call(null,vec__16748_16767,0,null);var value_16769 = cljs.core.nth.call(null,vec__16748_16767,1,null);domina.set_style_BANG_.call(null,content,name_16768,value_16769);
{
var G__16770 = cljs.core.next.call(null,seq__16743_16761__$1);
var G__16771 = null;
var G__16772 = 0;
var G__16773 = 0;
seq__16743_16749 = G__16770;
chunk__16744_16750 = G__16771;
count__16745_16751 = G__16772;
i__16746_16752 = G__16773;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16780_16786 = cljs.core.seq.call(null,attrs);var chunk__16781_16787 = null;var count__16782_16788 = 0;var i__16783_16789 = 0;while(true){
if((i__16783_16789 < count__16782_16788))
{var vec__16784_16790 = cljs.core._nth.call(null,chunk__16781_16787,i__16783_16789);var name_16791 = cljs.core.nth.call(null,vec__16784_16790,0,null);var value_16792 = cljs.core.nth.call(null,vec__16784_16790,1,null);domina.set_attr_BANG_.call(null,content,name_16791,value_16792);
{
var G__16793 = seq__16780_16786;
var G__16794 = chunk__16781_16787;
var G__16795 = count__16782_16788;
var G__16796 = (i__16783_16789 + 1);
seq__16780_16786 = G__16793;
chunk__16781_16787 = G__16794;
count__16782_16788 = G__16795;
i__16783_16789 = G__16796;
continue;
}
} else
{var temp__4092__auto___16797 = cljs.core.seq.call(null,seq__16780_16786);if(temp__4092__auto___16797)
{var seq__16780_16798__$1 = temp__4092__auto___16797;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16780_16798__$1))
{var c__4148__auto___16799 = cljs.core.chunk_first.call(null,seq__16780_16798__$1);{
var G__16800 = cljs.core.chunk_rest.call(null,seq__16780_16798__$1);
var G__16801 = c__4148__auto___16799;
var G__16802 = cljs.core.count.call(null,c__4148__auto___16799);
var G__16803 = 0;
seq__16780_16786 = G__16800;
chunk__16781_16787 = G__16801;
count__16782_16788 = G__16802;
i__16783_16789 = G__16803;
continue;
}
} else
{var vec__16785_16804 = cljs.core.first.call(null,seq__16780_16798__$1);var name_16805 = cljs.core.nth.call(null,vec__16785_16804,0,null);var value_16806 = cljs.core.nth.call(null,vec__16785_16804,1,null);domina.set_attr_BANG_.call(null,content,name_16805,value_16806);
{
var G__16807 = cljs.core.next.call(null,seq__16780_16798__$1);
var G__16808 = null;
var G__16809 = 0;
var G__16810 = 0;
seq__16780_16786 = G__16807;
chunk__16781_16787 = G__16808;
count__16782_16788 = G__16809;
i__16783_16789 = G__16810;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16815_16819 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16816_16820 = null;var count__16817_16821 = 0;var i__16818_16822 = 0;while(true){
if((i__16818_16822 < count__16817_16821))
{var node_16823 = cljs.core._nth.call(null,chunk__16816_16820,i__16818_16822);goog.dom.classes.add(node_16823,class$);
{
var G__16824 = seq__16815_16819;
var G__16825 = chunk__16816_16820;
var G__16826 = count__16817_16821;
var G__16827 = (i__16818_16822 + 1);
seq__16815_16819 = G__16824;
chunk__16816_16820 = G__16825;
count__16817_16821 = G__16826;
i__16818_16822 = G__16827;
continue;
}
} else
{var temp__4092__auto___16828 = cljs.core.seq.call(null,seq__16815_16819);if(temp__4092__auto___16828)
{var seq__16815_16829__$1 = temp__4092__auto___16828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16815_16829__$1))
{var c__4148__auto___16830 = cljs.core.chunk_first.call(null,seq__16815_16829__$1);{
var G__16831 = cljs.core.chunk_rest.call(null,seq__16815_16829__$1);
var G__16832 = c__4148__auto___16830;
var G__16833 = cljs.core.count.call(null,c__4148__auto___16830);
var G__16834 = 0;
seq__16815_16819 = G__16831;
chunk__16816_16820 = G__16832;
count__16817_16821 = G__16833;
i__16818_16822 = G__16834;
continue;
}
} else
{var node_16835 = cljs.core.first.call(null,seq__16815_16829__$1);goog.dom.classes.add(node_16835,class$);
{
var G__16836 = cljs.core.next.call(null,seq__16815_16829__$1);
var G__16837 = null;
var G__16838 = 0;
var G__16839 = 0;
seq__16815_16819 = G__16836;
chunk__16816_16820 = G__16837;
count__16817_16821 = G__16838;
i__16818_16822 = G__16839;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16844_16848 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16845_16849 = null;var count__16846_16850 = 0;var i__16847_16851 = 0;while(true){
if((i__16847_16851 < count__16846_16850))
{var node_16852 = cljs.core._nth.call(null,chunk__16845_16849,i__16847_16851);goog.dom.classes.remove(node_16852,class$);
{
var G__16853 = seq__16844_16848;
var G__16854 = chunk__16845_16849;
var G__16855 = count__16846_16850;
var G__16856 = (i__16847_16851 + 1);
seq__16844_16848 = G__16853;
chunk__16845_16849 = G__16854;
count__16846_16850 = G__16855;
i__16847_16851 = G__16856;
continue;
}
} else
{var temp__4092__auto___16857 = cljs.core.seq.call(null,seq__16844_16848);if(temp__4092__auto___16857)
{var seq__16844_16858__$1 = temp__4092__auto___16857;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16844_16858__$1))
{var c__4148__auto___16859 = cljs.core.chunk_first.call(null,seq__16844_16858__$1);{
var G__16860 = cljs.core.chunk_rest.call(null,seq__16844_16858__$1);
var G__16861 = c__4148__auto___16859;
var G__16862 = cljs.core.count.call(null,c__4148__auto___16859);
var G__16863 = 0;
seq__16844_16848 = G__16860;
chunk__16845_16849 = G__16861;
count__16846_16850 = G__16862;
i__16847_16851 = G__16863;
continue;
}
} else
{var node_16864 = cljs.core.first.call(null,seq__16844_16858__$1);goog.dom.classes.remove(node_16864,class$);
{
var G__16865 = cljs.core.next.call(null,seq__16844_16858__$1);
var G__16866 = null;
var G__16867 = 0;
var G__16868 = 0;
seq__16844_16848 = G__16865;
chunk__16845_16849 = G__16866;
count__16846_16850 = G__16867;
i__16847_16851 = G__16868;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16873_16877 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16874_16878 = null;var count__16875_16879 = 0;var i__16876_16880 = 0;while(true){
if((i__16876_16880 < count__16875_16879))
{var node_16881 = cljs.core._nth.call(null,chunk__16874_16878,i__16876_16880);goog.dom.classes.toggle(node_16881,class$);
{
var G__16882 = seq__16873_16877;
var G__16883 = chunk__16874_16878;
var G__16884 = count__16875_16879;
var G__16885 = (i__16876_16880 + 1);
seq__16873_16877 = G__16882;
chunk__16874_16878 = G__16883;
count__16875_16879 = G__16884;
i__16876_16880 = G__16885;
continue;
}
} else
{var temp__4092__auto___16886 = cljs.core.seq.call(null,seq__16873_16877);if(temp__4092__auto___16886)
{var seq__16873_16887__$1 = temp__4092__auto___16886;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16873_16887__$1))
{var c__4148__auto___16888 = cljs.core.chunk_first.call(null,seq__16873_16887__$1);{
var G__16889 = cljs.core.chunk_rest.call(null,seq__16873_16887__$1);
var G__16890 = c__4148__auto___16888;
var G__16891 = cljs.core.count.call(null,c__4148__auto___16888);
var G__16892 = 0;
seq__16873_16877 = G__16889;
chunk__16874_16878 = G__16890;
count__16875_16879 = G__16891;
i__16876_16880 = G__16892;
continue;
}
} else
{var node_16893 = cljs.core.first.call(null,seq__16873_16887__$1);goog.dom.classes.toggle(node_16893,class$);
{
var G__16894 = cljs.core.next.call(null,seq__16873_16887__$1);
var G__16895 = null;
var G__16896 = 0;
var G__16897 = 0;
seq__16873_16877 = G__16894;
chunk__16874_16878 = G__16895;
count__16875_16879 = G__16896;
i__16876_16880 = G__16897;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16906__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16902_16907 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16903_16908 = null;var count__16904_16909 = 0;var i__16905_16910 = 0;while(true){
if((i__16905_16910 < count__16904_16909))
{var node_16911 = cljs.core._nth.call(null,chunk__16903_16908,i__16905_16910);goog.dom.classes.set(node_16911,classes_16906__$1);
{
var G__16912 = seq__16902_16907;
var G__16913 = chunk__16903_16908;
var G__16914 = count__16904_16909;
var G__16915 = (i__16905_16910 + 1);
seq__16902_16907 = G__16912;
chunk__16903_16908 = G__16913;
count__16904_16909 = G__16914;
i__16905_16910 = G__16915;
continue;
}
} else
{var temp__4092__auto___16916 = cljs.core.seq.call(null,seq__16902_16907);if(temp__4092__auto___16916)
{var seq__16902_16917__$1 = temp__4092__auto___16916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16902_16917__$1))
{var c__4148__auto___16918 = cljs.core.chunk_first.call(null,seq__16902_16917__$1);{
var G__16919 = cljs.core.chunk_rest.call(null,seq__16902_16917__$1);
var G__16920 = c__4148__auto___16918;
var G__16921 = cljs.core.count.call(null,c__4148__auto___16918);
var G__16922 = 0;
seq__16902_16907 = G__16919;
chunk__16903_16908 = G__16920;
count__16904_16909 = G__16921;
i__16905_16910 = G__16922;
continue;
}
} else
{var node_16923 = cljs.core.first.call(null,seq__16902_16917__$1);goog.dom.classes.set(node_16923,classes_16906__$1);
{
var G__16924 = cljs.core.next.call(null,seq__16902_16917__$1);
var G__16925 = null;
var G__16926 = 0;
var G__16927 = 0;
seq__16902_16907 = G__16924;
chunk__16903_16908 = G__16925;
count__16904_16909 = G__16926;
i__16905_16910 = G__16927;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16932_16936 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16933_16937 = null;var count__16934_16938 = 0;var i__16935_16939 = 0;while(true){
if((i__16935_16939 < count__16934_16938))
{var node_16940 = cljs.core._nth.call(null,chunk__16933_16937,i__16935_16939);goog.dom.setTextContent(node_16940,value);
{
var G__16941 = seq__16932_16936;
var G__16942 = chunk__16933_16937;
var G__16943 = count__16934_16938;
var G__16944 = (i__16935_16939 + 1);
seq__16932_16936 = G__16941;
chunk__16933_16937 = G__16942;
count__16934_16938 = G__16943;
i__16935_16939 = G__16944;
continue;
}
} else
{var temp__4092__auto___16945 = cljs.core.seq.call(null,seq__16932_16936);if(temp__4092__auto___16945)
{var seq__16932_16946__$1 = temp__4092__auto___16945;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16932_16946__$1))
{var c__4148__auto___16947 = cljs.core.chunk_first.call(null,seq__16932_16946__$1);{
var G__16948 = cljs.core.chunk_rest.call(null,seq__16932_16946__$1);
var G__16949 = c__4148__auto___16947;
var G__16950 = cljs.core.count.call(null,c__4148__auto___16947);
var G__16951 = 0;
seq__16932_16936 = G__16948;
chunk__16933_16937 = G__16949;
count__16934_16938 = G__16950;
i__16935_16939 = G__16951;
continue;
}
} else
{var node_16952 = cljs.core.first.call(null,seq__16932_16946__$1);goog.dom.setTextContent(node_16952,value);
{
var G__16953 = cljs.core.next.call(null,seq__16932_16946__$1);
var G__16954 = null;
var G__16955 = 0;
var G__16956 = 0;
seq__16932_16936 = G__16953;
chunk__16933_16937 = G__16954;
count__16934_16938 = G__16955;
i__16935_16939 = G__16956;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16961_16965 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16962_16966 = null;var count__16963_16967 = 0;var i__16964_16968 = 0;while(true){
if((i__16964_16968 < count__16963_16967))
{var node_16969 = cljs.core._nth.call(null,chunk__16962_16966,i__16964_16968);goog.dom.forms.setValue(node_16969,value);
{
var G__16970 = seq__16961_16965;
var G__16971 = chunk__16962_16966;
var G__16972 = count__16963_16967;
var G__16973 = (i__16964_16968 + 1);
seq__16961_16965 = G__16970;
chunk__16962_16966 = G__16971;
count__16963_16967 = G__16972;
i__16964_16968 = G__16973;
continue;
}
} else
{var temp__4092__auto___16974 = cljs.core.seq.call(null,seq__16961_16965);if(temp__4092__auto___16974)
{var seq__16961_16975__$1 = temp__4092__auto___16974;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16961_16975__$1))
{var c__4148__auto___16976 = cljs.core.chunk_first.call(null,seq__16961_16975__$1);{
var G__16977 = cljs.core.chunk_rest.call(null,seq__16961_16975__$1);
var G__16978 = c__4148__auto___16976;
var G__16979 = cljs.core.count.call(null,c__4148__auto___16976);
var G__16980 = 0;
seq__16961_16965 = G__16977;
chunk__16962_16966 = G__16978;
count__16963_16967 = G__16979;
i__16964_16968 = G__16980;
continue;
}
} else
{var node_16981 = cljs.core.first.call(null,seq__16961_16975__$1);goog.dom.forms.setValue(node_16981,value);
{
var G__16982 = cljs.core.next.call(null,seq__16961_16975__$1);
var G__16983 = null;
var G__16984 = 0;
var G__16985 = 0;
seq__16961_16965 = G__16982;
chunk__16962_16966 = G__16983;
count__16963_16967 = G__16984;
i__16964_16968 = G__16985;
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
{var value_16996 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16992_16997 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16993_16998 = null;var count__16994_16999 = 0;var i__16995_17000 = 0;while(true){
if((i__16995_17000 < count__16994_16999))
{var node_17001 = cljs.core._nth.call(null,chunk__16993_16998,i__16995_17000);node_17001.innerHTML = value_16996;
{
var G__17002 = seq__16992_16997;
var G__17003 = chunk__16993_16998;
var G__17004 = count__16994_16999;
var G__17005 = (i__16995_17000 + 1);
seq__16992_16997 = G__17002;
chunk__16993_16998 = G__17003;
count__16994_16999 = G__17004;
i__16995_17000 = G__17005;
continue;
}
} else
{var temp__4092__auto___17006 = cljs.core.seq.call(null,seq__16992_16997);if(temp__4092__auto___17006)
{var seq__16992_17007__$1 = temp__4092__auto___17006;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16992_17007__$1))
{var c__4148__auto___17008 = cljs.core.chunk_first.call(null,seq__16992_17007__$1);{
var G__17009 = cljs.core.chunk_rest.call(null,seq__16992_17007__$1);
var G__17010 = c__4148__auto___17008;
var G__17011 = cljs.core.count.call(null,c__4148__auto___17008);
var G__17012 = 0;
seq__16992_16997 = G__17009;
chunk__16993_16998 = G__17010;
count__16994_16999 = G__17011;
i__16995_17000 = G__17012;
continue;
}
} else
{var node_17013 = cljs.core.first.call(null,seq__16992_17007__$1);node_17013.innerHTML = value_16996;
{
var G__17014 = cljs.core.next.call(null,seq__16992_17007__$1);
var G__17015 = null;
var G__17016 = 0;
var G__17017 = 0;
seq__16992_16997 = G__17014;
chunk__16993_16998 = G__17015;
count__16994_16999 = G__17016;
i__16995_17000 = G__17017;
continue;
}
}
} else
{}
}
break;
}
}catch (e16991){if((e16991 instanceof Error))
{var e_17018 = e16991;domina.replace_children_BANG_.call(null,content,value_16996);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16991;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17025_17029 = cljs.core.seq.call(null,children);var chunk__17026_17030 = null;var count__17027_17031 = 0;var i__17028_17032 = 0;while(true){
if((i__17028_17032 < count__17027_17031))
{var child_17033 = cljs.core._nth.call(null,chunk__17026_17030,i__17028_17032);frag.appendChild(child_17033);
{
var G__17034 = seq__17025_17029;
var G__17035 = chunk__17026_17030;
var G__17036 = count__17027_17031;
var G__17037 = (i__17028_17032 + 1);
seq__17025_17029 = G__17034;
chunk__17026_17030 = G__17035;
count__17027_17031 = G__17036;
i__17028_17032 = G__17037;
continue;
}
} else
{var temp__4092__auto___17038 = cljs.core.seq.call(null,seq__17025_17029);if(temp__4092__auto___17038)
{var seq__17025_17039__$1 = temp__4092__auto___17038;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17025_17039__$1))
{var c__4148__auto___17040 = cljs.core.chunk_first.call(null,seq__17025_17039__$1);{
var G__17041 = cljs.core.chunk_rest.call(null,seq__17025_17039__$1);
var G__17042 = c__4148__auto___17040;
var G__17043 = cljs.core.count.call(null,c__4148__auto___17040);
var G__17044 = 0;
seq__17025_17029 = G__17041;
chunk__17026_17030 = G__17042;
count__17027_17031 = G__17043;
i__17028_17032 = G__17044;
continue;
}
} else
{var child_17045 = cljs.core.first.call(null,seq__17025_17039__$1);frag.appendChild(child_17045);
{
var G__17046 = cljs.core.next.call(null,seq__17025_17039__$1);
var G__17047 = null;
var G__17048 = 0;
var G__17049 = 0;
seq__17025_17029 = G__17046;
chunk__17026_17030 = G__17047;
count__17027_17031 = G__17048;
i__17028_17032 = G__17049;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17019_SHARP_,p2__17020_SHARP_){return f.call(null,p1__17019_SHARP_,p2__17020_SHARP_);
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
{if((function (){var G__17051 = list_thing;if(G__17051)
{var bit__4050__auto__ = (G__17051.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17051.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17051.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17051);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17051);
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
{if((function (){var G__17052 = content;if(G__17052)
{var bit__4050__auto__ = (G__17052.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17052.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17052.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17052);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17052);
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
{if((function (){var G__17053 = content;if(G__17053)
{var bit__4050__auto__ = (G__17053.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17053.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17053.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17053);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17053);
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