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
var opt_wrapper_16688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16690 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16689,table_section_wrapper_16689,opt_wrapper_16688,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16690,table_section_wrapper_16689,cell_wrapper_16690,opt_wrapper_16688,table_section_wrapper_16689,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16689]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16695 = cljs.core.seq.call(null,tbody);var chunk__16696 = null;var count__16697 = 0;var i__16698 = 0;while(true){
if((i__16698 < count__16697))
{var child = cljs.core._nth.call(null,chunk__16696,i__16698);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16699 = seq__16695;
var G__16700 = chunk__16696;
var G__16701 = count__16697;
var G__16702 = (i__16698 + 1);
seq__16695 = G__16699;
chunk__16696 = G__16700;
count__16697 = G__16701;
i__16698 = G__16702;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16695);if(temp__4092__auto__)
{var seq__16695__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16695__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16695__$1);{
var G__16703 = cljs.core.chunk_rest.call(null,seq__16695__$1);
var G__16704 = c__4148__auto__;
var G__16705 = cljs.core.count.call(null,c__4148__auto__);
var G__16706 = 0;
seq__16695 = G__16703;
chunk__16696 = G__16704;
count__16697 = G__16705;
i__16698 = G__16706;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16695__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16707 = cljs.core.next.call(null,seq__16695__$1);
var G__16708 = null;
var G__16709 = 0;
var G__16710 = 0;
seq__16695 = G__16707;
chunk__16696 = G__16708;
count__16697 = G__16709;
i__16698 = G__16710;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16712 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16712,0,null);var start_wrap = cljs.core.nth.call(null,vec__16712,1,null);var end_wrap = cljs.core.nth.call(null,vec__16712,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16713 = wrapper.lastChild;
var G__16714 = (level - 1);
wrapper = G__16713;
level = G__16714;
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
domina.DomContent = (function (){var obj16716 = {};return obj16716;
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
log_debug.cljs$lang$applyTo = (function (arglist__16717){
var mesg = cljs.core.seq(arglist__16717);
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
log.cljs$lang$applyTo = (function (arglist__16718){
var mesg = cljs.core.seq(arglist__16718);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16719){
var contents = cljs.core.seq(arglist__16719);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16720_SHARP_){return p1__16720_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16721_SHARP_,p2__16722_SHARP_){return goog.dom.insertChildAt(p1__16721_SHARP_,p2__16722_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16724_SHARP_,p2__16723_SHARP_){return goog.dom.insertSiblingBefore(p2__16723_SHARP_,p1__16724_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16726_SHARP_,p2__16725_SHARP_){return goog.dom.insertSiblingAfter(p2__16725_SHARP_,p1__16726_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16728_SHARP_,p2__16727_SHARP_){return goog.dom.replaceNode(p2__16727_SHARP_,p1__16728_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16733_16737 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16734_16738 = null;var count__16735_16739 = 0;var i__16736_16740 = 0;while(true){
if((i__16736_16740 < count__16735_16739))
{var n_16741 = cljs.core._nth.call(null,chunk__16734_16738,i__16736_16740);goog.style.setStyle(n_16741,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16742 = seq__16733_16737;
var G__16743 = chunk__16734_16738;
var G__16744 = count__16735_16739;
var G__16745 = (i__16736_16740 + 1);
seq__16733_16737 = G__16742;
chunk__16734_16738 = G__16743;
count__16735_16739 = G__16744;
i__16736_16740 = G__16745;
continue;
}
} else
{var temp__4092__auto___16746 = cljs.core.seq.call(null,seq__16733_16737);if(temp__4092__auto___16746)
{var seq__16733_16747__$1 = temp__4092__auto___16746;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16733_16747__$1))
{var c__4148__auto___16748 = cljs.core.chunk_first.call(null,seq__16733_16747__$1);{
var G__16749 = cljs.core.chunk_rest.call(null,seq__16733_16747__$1);
var G__16750 = c__4148__auto___16748;
var G__16751 = cljs.core.count.call(null,c__4148__auto___16748);
var G__16752 = 0;
seq__16733_16737 = G__16749;
chunk__16734_16738 = G__16750;
count__16735_16739 = G__16751;
i__16736_16740 = G__16752;
continue;
}
} else
{var n_16753 = cljs.core.first.call(null,seq__16733_16747__$1);goog.style.setStyle(n_16753,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16754 = cljs.core.next.call(null,seq__16733_16747__$1);
var G__16755 = null;
var G__16756 = 0;
var G__16757 = 0;
seq__16733_16737 = G__16754;
chunk__16734_16738 = G__16755;
count__16735_16739 = G__16756;
i__16736_16740 = G__16757;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16758){
var content = cljs.core.first(arglist__16758);
arglist__16758 = cljs.core.next(arglist__16758);
var name = cljs.core.first(arglist__16758);
var value = cljs.core.rest(arglist__16758);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16763_16767 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16764_16768 = null;var count__16765_16769 = 0;var i__16766_16770 = 0;while(true){
if((i__16766_16770 < count__16765_16769))
{var n_16771 = cljs.core._nth.call(null,chunk__16764_16768,i__16766_16770);n_16771.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16772 = seq__16763_16767;
var G__16773 = chunk__16764_16768;
var G__16774 = count__16765_16769;
var G__16775 = (i__16766_16770 + 1);
seq__16763_16767 = G__16772;
chunk__16764_16768 = G__16773;
count__16765_16769 = G__16774;
i__16766_16770 = G__16775;
continue;
}
} else
{var temp__4092__auto___16776 = cljs.core.seq.call(null,seq__16763_16767);if(temp__4092__auto___16776)
{var seq__16763_16777__$1 = temp__4092__auto___16776;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16763_16777__$1))
{var c__4148__auto___16778 = cljs.core.chunk_first.call(null,seq__16763_16777__$1);{
var G__16779 = cljs.core.chunk_rest.call(null,seq__16763_16777__$1);
var G__16780 = c__4148__auto___16778;
var G__16781 = cljs.core.count.call(null,c__4148__auto___16778);
var G__16782 = 0;
seq__16763_16767 = G__16779;
chunk__16764_16768 = G__16780;
count__16765_16769 = G__16781;
i__16766_16770 = G__16782;
continue;
}
} else
{var n_16783 = cljs.core.first.call(null,seq__16763_16777__$1);n_16783.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16784 = cljs.core.next.call(null,seq__16763_16777__$1);
var G__16785 = null;
var G__16786 = 0;
var G__16787 = 0;
seq__16763_16767 = G__16784;
chunk__16764_16768 = G__16785;
count__16765_16769 = G__16786;
i__16766_16770 = G__16787;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16788){
var content = cljs.core.first(arglist__16788);
arglist__16788 = cljs.core.next(arglist__16788);
var name = cljs.core.first(arglist__16788);
var value = cljs.core.rest(arglist__16788);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16793_16797 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16794_16798 = null;var count__16795_16799 = 0;var i__16796_16800 = 0;while(true){
if((i__16796_16800 < count__16795_16799))
{var n_16801 = cljs.core._nth.call(null,chunk__16794_16798,i__16796_16800);n_16801.removeAttribute(cljs.core.name.call(null,name));
{
var G__16802 = seq__16793_16797;
var G__16803 = chunk__16794_16798;
var G__16804 = count__16795_16799;
var G__16805 = (i__16796_16800 + 1);
seq__16793_16797 = G__16802;
chunk__16794_16798 = G__16803;
count__16795_16799 = G__16804;
i__16796_16800 = G__16805;
continue;
}
} else
{var temp__4092__auto___16806 = cljs.core.seq.call(null,seq__16793_16797);if(temp__4092__auto___16806)
{var seq__16793_16807__$1 = temp__4092__auto___16806;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16793_16807__$1))
{var c__4148__auto___16808 = cljs.core.chunk_first.call(null,seq__16793_16807__$1);{
var G__16809 = cljs.core.chunk_rest.call(null,seq__16793_16807__$1);
var G__16810 = c__4148__auto___16808;
var G__16811 = cljs.core.count.call(null,c__4148__auto___16808);
var G__16812 = 0;
seq__16793_16797 = G__16809;
chunk__16794_16798 = G__16810;
count__16795_16799 = G__16811;
i__16796_16800 = G__16812;
continue;
}
} else
{var n_16813 = cljs.core.first.call(null,seq__16793_16807__$1);n_16813.removeAttribute(cljs.core.name.call(null,name));
{
var G__16814 = cljs.core.next.call(null,seq__16793_16807__$1);
var G__16815 = null;
var G__16816 = 0;
var G__16817 = 0;
seq__16793_16797 = G__16814;
chunk__16794_16798 = G__16815;
count__16795_16799 = G__16816;
i__16796_16800 = G__16817;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16819 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16819,0,null);var v = cljs.core.nth.call(null,vec__16819,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16820_SHARP_){var attr = attrs__$1.item(p1__16820_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16827_16833 = cljs.core.seq.call(null,styles);var chunk__16828_16834 = null;var count__16829_16835 = 0;var i__16830_16836 = 0;while(true){
if((i__16830_16836 < count__16829_16835))
{var vec__16831_16837 = cljs.core._nth.call(null,chunk__16828_16834,i__16830_16836);var name_16838 = cljs.core.nth.call(null,vec__16831_16837,0,null);var value_16839 = cljs.core.nth.call(null,vec__16831_16837,1,null);domina.set_style_BANG_.call(null,content,name_16838,value_16839);
{
var G__16840 = seq__16827_16833;
var G__16841 = chunk__16828_16834;
var G__16842 = count__16829_16835;
var G__16843 = (i__16830_16836 + 1);
seq__16827_16833 = G__16840;
chunk__16828_16834 = G__16841;
count__16829_16835 = G__16842;
i__16830_16836 = G__16843;
continue;
}
} else
{var temp__4092__auto___16844 = cljs.core.seq.call(null,seq__16827_16833);if(temp__4092__auto___16844)
{var seq__16827_16845__$1 = temp__4092__auto___16844;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16827_16845__$1))
{var c__4148__auto___16846 = cljs.core.chunk_first.call(null,seq__16827_16845__$1);{
var G__16847 = cljs.core.chunk_rest.call(null,seq__16827_16845__$1);
var G__16848 = c__4148__auto___16846;
var G__16849 = cljs.core.count.call(null,c__4148__auto___16846);
var G__16850 = 0;
seq__16827_16833 = G__16847;
chunk__16828_16834 = G__16848;
count__16829_16835 = G__16849;
i__16830_16836 = G__16850;
continue;
}
} else
{var vec__16832_16851 = cljs.core.first.call(null,seq__16827_16845__$1);var name_16852 = cljs.core.nth.call(null,vec__16832_16851,0,null);var value_16853 = cljs.core.nth.call(null,vec__16832_16851,1,null);domina.set_style_BANG_.call(null,content,name_16852,value_16853);
{
var G__16854 = cljs.core.next.call(null,seq__16827_16845__$1);
var G__16855 = null;
var G__16856 = 0;
var G__16857 = 0;
seq__16827_16833 = G__16854;
chunk__16828_16834 = G__16855;
count__16829_16835 = G__16856;
i__16830_16836 = G__16857;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16864_16870 = cljs.core.seq.call(null,attrs);var chunk__16865_16871 = null;var count__16866_16872 = 0;var i__16867_16873 = 0;while(true){
if((i__16867_16873 < count__16866_16872))
{var vec__16868_16874 = cljs.core._nth.call(null,chunk__16865_16871,i__16867_16873);var name_16875 = cljs.core.nth.call(null,vec__16868_16874,0,null);var value_16876 = cljs.core.nth.call(null,vec__16868_16874,1,null);domina.set_attr_BANG_.call(null,content,name_16875,value_16876);
{
var G__16877 = seq__16864_16870;
var G__16878 = chunk__16865_16871;
var G__16879 = count__16866_16872;
var G__16880 = (i__16867_16873 + 1);
seq__16864_16870 = G__16877;
chunk__16865_16871 = G__16878;
count__16866_16872 = G__16879;
i__16867_16873 = G__16880;
continue;
}
} else
{var temp__4092__auto___16881 = cljs.core.seq.call(null,seq__16864_16870);if(temp__4092__auto___16881)
{var seq__16864_16882__$1 = temp__4092__auto___16881;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16864_16882__$1))
{var c__4148__auto___16883 = cljs.core.chunk_first.call(null,seq__16864_16882__$1);{
var G__16884 = cljs.core.chunk_rest.call(null,seq__16864_16882__$1);
var G__16885 = c__4148__auto___16883;
var G__16886 = cljs.core.count.call(null,c__4148__auto___16883);
var G__16887 = 0;
seq__16864_16870 = G__16884;
chunk__16865_16871 = G__16885;
count__16866_16872 = G__16886;
i__16867_16873 = G__16887;
continue;
}
} else
{var vec__16869_16888 = cljs.core.first.call(null,seq__16864_16882__$1);var name_16889 = cljs.core.nth.call(null,vec__16869_16888,0,null);var value_16890 = cljs.core.nth.call(null,vec__16869_16888,1,null);domina.set_attr_BANG_.call(null,content,name_16889,value_16890);
{
var G__16891 = cljs.core.next.call(null,seq__16864_16882__$1);
var G__16892 = null;
var G__16893 = 0;
var G__16894 = 0;
seq__16864_16870 = G__16891;
chunk__16865_16871 = G__16892;
count__16866_16872 = G__16893;
i__16867_16873 = G__16894;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16899_16903 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16900_16904 = null;var count__16901_16905 = 0;var i__16902_16906 = 0;while(true){
if((i__16902_16906 < count__16901_16905))
{var node_16907 = cljs.core._nth.call(null,chunk__16900_16904,i__16902_16906);goog.dom.classes.add(node_16907,class$);
{
var G__16908 = seq__16899_16903;
var G__16909 = chunk__16900_16904;
var G__16910 = count__16901_16905;
var G__16911 = (i__16902_16906 + 1);
seq__16899_16903 = G__16908;
chunk__16900_16904 = G__16909;
count__16901_16905 = G__16910;
i__16902_16906 = G__16911;
continue;
}
} else
{var temp__4092__auto___16912 = cljs.core.seq.call(null,seq__16899_16903);if(temp__4092__auto___16912)
{var seq__16899_16913__$1 = temp__4092__auto___16912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16899_16913__$1))
{var c__4148__auto___16914 = cljs.core.chunk_first.call(null,seq__16899_16913__$1);{
var G__16915 = cljs.core.chunk_rest.call(null,seq__16899_16913__$1);
var G__16916 = c__4148__auto___16914;
var G__16917 = cljs.core.count.call(null,c__4148__auto___16914);
var G__16918 = 0;
seq__16899_16903 = G__16915;
chunk__16900_16904 = G__16916;
count__16901_16905 = G__16917;
i__16902_16906 = G__16918;
continue;
}
} else
{var node_16919 = cljs.core.first.call(null,seq__16899_16913__$1);goog.dom.classes.add(node_16919,class$);
{
var G__16920 = cljs.core.next.call(null,seq__16899_16913__$1);
var G__16921 = null;
var G__16922 = 0;
var G__16923 = 0;
seq__16899_16903 = G__16920;
chunk__16900_16904 = G__16921;
count__16901_16905 = G__16922;
i__16902_16906 = G__16923;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16928_16932 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16929_16933 = null;var count__16930_16934 = 0;var i__16931_16935 = 0;while(true){
if((i__16931_16935 < count__16930_16934))
{var node_16936 = cljs.core._nth.call(null,chunk__16929_16933,i__16931_16935);goog.dom.classes.remove(node_16936,class$);
{
var G__16937 = seq__16928_16932;
var G__16938 = chunk__16929_16933;
var G__16939 = count__16930_16934;
var G__16940 = (i__16931_16935 + 1);
seq__16928_16932 = G__16937;
chunk__16929_16933 = G__16938;
count__16930_16934 = G__16939;
i__16931_16935 = G__16940;
continue;
}
} else
{var temp__4092__auto___16941 = cljs.core.seq.call(null,seq__16928_16932);if(temp__4092__auto___16941)
{var seq__16928_16942__$1 = temp__4092__auto___16941;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16928_16942__$1))
{var c__4148__auto___16943 = cljs.core.chunk_first.call(null,seq__16928_16942__$1);{
var G__16944 = cljs.core.chunk_rest.call(null,seq__16928_16942__$1);
var G__16945 = c__4148__auto___16943;
var G__16946 = cljs.core.count.call(null,c__4148__auto___16943);
var G__16947 = 0;
seq__16928_16932 = G__16944;
chunk__16929_16933 = G__16945;
count__16930_16934 = G__16946;
i__16931_16935 = G__16947;
continue;
}
} else
{var node_16948 = cljs.core.first.call(null,seq__16928_16942__$1);goog.dom.classes.remove(node_16948,class$);
{
var G__16949 = cljs.core.next.call(null,seq__16928_16942__$1);
var G__16950 = null;
var G__16951 = 0;
var G__16952 = 0;
seq__16928_16932 = G__16949;
chunk__16929_16933 = G__16950;
count__16930_16934 = G__16951;
i__16931_16935 = G__16952;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16957_16961 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16958_16962 = null;var count__16959_16963 = 0;var i__16960_16964 = 0;while(true){
if((i__16960_16964 < count__16959_16963))
{var node_16965 = cljs.core._nth.call(null,chunk__16958_16962,i__16960_16964);goog.dom.classes.toggle(node_16965,class$);
{
var G__16966 = seq__16957_16961;
var G__16967 = chunk__16958_16962;
var G__16968 = count__16959_16963;
var G__16969 = (i__16960_16964 + 1);
seq__16957_16961 = G__16966;
chunk__16958_16962 = G__16967;
count__16959_16963 = G__16968;
i__16960_16964 = G__16969;
continue;
}
} else
{var temp__4092__auto___16970 = cljs.core.seq.call(null,seq__16957_16961);if(temp__4092__auto___16970)
{var seq__16957_16971__$1 = temp__4092__auto___16970;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16957_16971__$1))
{var c__4148__auto___16972 = cljs.core.chunk_first.call(null,seq__16957_16971__$1);{
var G__16973 = cljs.core.chunk_rest.call(null,seq__16957_16971__$1);
var G__16974 = c__4148__auto___16972;
var G__16975 = cljs.core.count.call(null,c__4148__auto___16972);
var G__16976 = 0;
seq__16957_16961 = G__16973;
chunk__16958_16962 = G__16974;
count__16959_16963 = G__16975;
i__16960_16964 = G__16976;
continue;
}
} else
{var node_16977 = cljs.core.first.call(null,seq__16957_16971__$1);goog.dom.classes.toggle(node_16977,class$);
{
var G__16978 = cljs.core.next.call(null,seq__16957_16971__$1);
var G__16979 = null;
var G__16980 = 0;
var G__16981 = 0;
seq__16957_16961 = G__16978;
chunk__16958_16962 = G__16979;
count__16959_16963 = G__16980;
i__16960_16964 = G__16981;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16990__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16986_16991 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16987_16992 = null;var count__16988_16993 = 0;var i__16989_16994 = 0;while(true){
if((i__16989_16994 < count__16988_16993))
{var node_16995 = cljs.core._nth.call(null,chunk__16987_16992,i__16989_16994);goog.dom.classes.set(node_16995,classes_16990__$1);
{
var G__16996 = seq__16986_16991;
var G__16997 = chunk__16987_16992;
var G__16998 = count__16988_16993;
var G__16999 = (i__16989_16994 + 1);
seq__16986_16991 = G__16996;
chunk__16987_16992 = G__16997;
count__16988_16993 = G__16998;
i__16989_16994 = G__16999;
continue;
}
} else
{var temp__4092__auto___17000 = cljs.core.seq.call(null,seq__16986_16991);if(temp__4092__auto___17000)
{var seq__16986_17001__$1 = temp__4092__auto___17000;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16986_17001__$1))
{var c__4148__auto___17002 = cljs.core.chunk_first.call(null,seq__16986_17001__$1);{
var G__17003 = cljs.core.chunk_rest.call(null,seq__16986_17001__$1);
var G__17004 = c__4148__auto___17002;
var G__17005 = cljs.core.count.call(null,c__4148__auto___17002);
var G__17006 = 0;
seq__16986_16991 = G__17003;
chunk__16987_16992 = G__17004;
count__16988_16993 = G__17005;
i__16989_16994 = G__17006;
continue;
}
} else
{var node_17007 = cljs.core.first.call(null,seq__16986_17001__$1);goog.dom.classes.set(node_17007,classes_16990__$1);
{
var G__17008 = cljs.core.next.call(null,seq__16986_17001__$1);
var G__17009 = null;
var G__17010 = 0;
var G__17011 = 0;
seq__16986_16991 = G__17008;
chunk__16987_16992 = G__17009;
count__16988_16993 = G__17010;
i__16989_16994 = G__17011;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17016_17020 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17017_17021 = null;var count__17018_17022 = 0;var i__17019_17023 = 0;while(true){
if((i__17019_17023 < count__17018_17022))
{var node_17024 = cljs.core._nth.call(null,chunk__17017_17021,i__17019_17023);goog.dom.setTextContent(node_17024,value);
{
var G__17025 = seq__17016_17020;
var G__17026 = chunk__17017_17021;
var G__17027 = count__17018_17022;
var G__17028 = (i__17019_17023 + 1);
seq__17016_17020 = G__17025;
chunk__17017_17021 = G__17026;
count__17018_17022 = G__17027;
i__17019_17023 = G__17028;
continue;
}
} else
{var temp__4092__auto___17029 = cljs.core.seq.call(null,seq__17016_17020);if(temp__4092__auto___17029)
{var seq__17016_17030__$1 = temp__4092__auto___17029;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17016_17030__$1))
{var c__4148__auto___17031 = cljs.core.chunk_first.call(null,seq__17016_17030__$1);{
var G__17032 = cljs.core.chunk_rest.call(null,seq__17016_17030__$1);
var G__17033 = c__4148__auto___17031;
var G__17034 = cljs.core.count.call(null,c__4148__auto___17031);
var G__17035 = 0;
seq__17016_17020 = G__17032;
chunk__17017_17021 = G__17033;
count__17018_17022 = G__17034;
i__17019_17023 = G__17035;
continue;
}
} else
{var node_17036 = cljs.core.first.call(null,seq__17016_17030__$1);goog.dom.setTextContent(node_17036,value);
{
var G__17037 = cljs.core.next.call(null,seq__17016_17030__$1);
var G__17038 = null;
var G__17039 = 0;
var G__17040 = 0;
seq__17016_17020 = G__17037;
chunk__17017_17021 = G__17038;
count__17018_17022 = G__17039;
i__17019_17023 = G__17040;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17045_17049 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17046_17050 = null;var count__17047_17051 = 0;var i__17048_17052 = 0;while(true){
if((i__17048_17052 < count__17047_17051))
{var node_17053 = cljs.core._nth.call(null,chunk__17046_17050,i__17048_17052);goog.dom.forms.setValue(node_17053,value);
{
var G__17054 = seq__17045_17049;
var G__17055 = chunk__17046_17050;
var G__17056 = count__17047_17051;
var G__17057 = (i__17048_17052 + 1);
seq__17045_17049 = G__17054;
chunk__17046_17050 = G__17055;
count__17047_17051 = G__17056;
i__17048_17052 = G__17057;
continue;
}
} else
{var temp__4092__auto___17058 = cljs.core.seq.call(null,seq__17045_17049);if(temp__4092__auto___17058)
{var seq__17045_17059__$1 = temp__4092__auto___17058;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17045_17059__$1))
{var c__4148__auto___17060 = cljs.core.chunk_first.call(null,seq__17045_17059__$1);{
var G__17061 = cljs.core.chunk_rest.call(null,seq__17045_17059__$1);
var G__17062 = c__4148__auto___17060;
var G__17063 = cljs.core.count.call(null,c__4148__auto___17060);
var G__17064 = 0;
seq__17045_17049 = G__17061;
chunk__17046_17050 = G__17062;
count__17047_17051 = G__17063;
i__17048_17052 = G__17064;
continue;
}
} else
{var node_17065 = cljs.core.first.call(null,seq__17045_17059__$1);goog.dom.forms.setValue(node_17065,value);
{
var G__17066 = cljs.core.next.call(null,seq__17045_17059__$1);
var G__17067 = null;
var G__17068 = 0;
var G__17069 = 0;
seq__17045_17049 = G__17066;
chunk__17046_17050 = G__17067;
count__17047_17051 = G__17068;
i__17048_17052 = G__17069;
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
{var value_17080 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17076_17081 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17077_17082 = null;var count__17078_17083 = 0;var i__17079_17084 = 0;while(true){
if((i__17079_17084 < count__17078_17083))
{var node_17085 = cljs.core._nth.call(null,chunk__17077_17082,i__17079_17084);node_17085.innerHTML = value_17080;
{
var G__17086 = seq__17076_17081;
var G__17087 = chunk__17077_17082;
var G__17088 = count__17078_17083;
var G__17089 = (i__17079_17084 + 1);
seq__17076_17081 = G__17086;
chunk__17077_17082 = G__17087;
count__17078_17083 = G__17088;
i__17079_17084 = G__17089;
continue;
}
} else
{var temp__4092__auto___17090 = cljs.core.seq.call(null,seq__17076_17081);if(temp__4092__auto___17090)
{var seq__17076_17091__$1 = temp__4092__auto___17090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17076_17091__$1))
{var c__4148__auto___17092 = cljs.core.chunk_first.call(null,seq__17076_17091__$1);{
var G__17093 = cljs.core.chunk_rest.call(null,seq__17076_17091__$1);
var G__17094 = c__4148__auto___17092;
var G__17095 = cljs.core.count.call(null,c__4148__auto___17092);
var G__17096 = 0;
seq__17076_17081 = G__17093;
chunk__17077_17082 = G__17094;
count__17078_17083 = G__17095;
i__17079_17084 = G__17096;
continue;
}
} else
{var node_17097 = cljs.core.first.call(null,seq__17076_17091__$1);node_17097.innerHTML = value_17080;
{
var G__17098 = cljs.core.next.call(null,seq__17076_17091__$1);
var G__17099 = null;
var G__17100 = 0;
var G__17101 = 0;
seq__17076_17081 = G__17098;
chunk__17077_17082 = G__17099;
count__17078_17083 = G__17100;
i__17079_17084 = G__17101;
continue;
}
}
} else
{}
}
break;
}
}catch (e17075){if((e17075 instanceof Error))
{var e_17102 = e17075;domina.replace_children_BANG_.call(null,content,value_17080);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17075;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17109_17113 = cljs.core.seq.call(null,children);var chunk__17110_17114 = null;var count__17111_17115 = 0;var i__17112_17116 = 0;while(true){
if((i__17112_17116 < count__17111_17115))
{var child_17117 = cljs.core._nth.call(null,chunk__17110_17114,i__17112_17116);frag.appendChild(child_17117);
{
var G__17118 = seq__17109_17113;
var G__17119 = chunk__17110_17114;
var G__17120 = count__17111_17115;
var G__17121 = (i__17112_17116 + 1);
seq__17109_17113 = G__17118;
chunk__17110_17114 = G__17119;
count__17111_17115 = G__17120;
i__17112_17116 = G__17121;
continue;
}
} else
{var temp__4092__auto___17122 = cljs.core.seq.call(null,seq__17109_17113);if(temp__4092__auto___17122)
{var seq__17109_17123__$1 = temp__4092__auto___17122;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17109_17123__$1))
{var c__4148__auto___17124 = cljs.core.chunk_first.call(null,seq__17109_17123__$1);{
var G__17125 = cljs.core.chunk_rest.call(null,seq__17109_17123__$1);
var G__17126 = c__4148__auto___17124;
var G__17127 = cljs.core.count.call(null,c__4148__auto___17124);
var G__17128 = 0;
seq__17109_17113 = G__17125;
chunk__17110_17114 = G__17126;
count__17111_17115 = G__17127;
i__17112_17116 = G__17128;
continue;
}
} else
{var child_17129 = cljs.core.first.call(null,seq__17109_17123__$1);frag.appendChild(child_17129);
{
var G__17130 = cljs.core.next.call(null,seq__17109_17123__$1);
var G__17131 = null;
var G__17132 = 0;
var G__17133 = 0;
seq__17109_17113 = G__17130;
chunk__17110_17114 = G__17131;
count__17111_17115 = G__17132;
i__17112_17116 = G__17133;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17103_SHARP_,p2__17104_SHARP_){return f.call(null,p1__17103_SHARP_,p2__17104_SHARP_);
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
{if((function (){var G__17135 = list_thing;if(G__17135)
{var bit__4050__auto__ = (G__17135.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17135.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17135.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17135);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17135);
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
{if((function (){var G__17136 = content;if(G__17136)
{var bit__4050__auto__ = (G__17136.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17136.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17136.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17136);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17136);
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
{if((function (){var G__17137 = content;if(G__17137)
{var bit__4050__auto__ = (G__17137.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17137.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17137.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17137);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17137);
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