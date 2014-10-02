// Compiled by ClojureScript 0.0-2322
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
var opt_wrapper_32787 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_32788 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_32789 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_32789,opt_wrapper_32787,table_section_wrapper_32788,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_32787,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_32788,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_32788,cell_wrapper_32789,table_section_wrapper_32788,table_section_wrapper_32788]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__32794 = cljs.core.seq.call(null,tbody);var chunk__32795 = null;var count__32796 = (0);var i__32797 = (0);while(true){
if((i__32797 < count__32796))
{var child = cljs.core._nth.call(null,chunk__32795,i__32797);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32798 = seq__32794;
var G__32799 = chunk__32795;
var G__32800 = count__32796;
var G__32801 = (i__32797 + (1));
seq__32794 = G__32798;
chunk__32795 = G__32799;
count__32796 = G__32800;
i__32797 = G__32801;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32794);if(temp__4126__auto__)
{var seq__32794__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32794__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__32794__$1);{
var G__32802 = cljs.core.chunk_rest.call(null,seq__32794__$1);
var G__32803 = c__4314__auto__;
var G__32804 = cljs.core.count.call(null,c__4314__auto__);
var G__32805 = (0);
seq__32794 = G__32802;
chunk__32795 = G__32803;
count__32796 = G__32804;
i__32797 = G__32805;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__32794__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__32806 = cljs.core.next.call(null,seq__32794__$1);
var G__32807 = null;
var G__32808 = (0);
var G__32809 = (0);
seq__32794 = G__32806;
chunk__32795 = G__32807;
count__32796 = G__32808;
i__32797 = G__32809;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__32811 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__32811,(0),null);var start_wrap = cljs.core.nth.call(null,vec__32811,(1),null);var end_wrap = cljs.core.nth.call(null,vec__32811,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__32812 = wrapper.lastChild;
var G__32813 = (level - (1));
wrapper = G__32812;
level = G__32813;
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
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
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
domina.DomContent = (function (){var obj32815 = {};return obj32815;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__32816){
var mesg = cljs.core.seq(arglist__32816);
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
log.cljs$lang$applyTo = (function (arglist__32817){
var mesg = cljs.core.seq(arglist__32817);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__32818){
var contents = cljs.core.seq(arglist__32818);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__32819_SHARP_){return p1__32819_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__32820_SHARP_,p2__32821_SHARP_){return goog.dom.insertChildAt(p1__32820_SHARP_,p2__32821_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32823_SHARP_,p2__32822_SHARP_){return goog.dom.insertSiblingBefore(p2__32822_SHARP_,p1__32823_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__32825_SHARP_,p2__32824_SHARP_){return goog.dom.insertSiblingAfter(p2__32824_SHARP_,p1__32825_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__32827_SHARP_,p2__32826_SHARP_){return goog.dom.replaceNode(p2__32826_SHARP_,p1__32827_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__32832_32836 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32833_32837 = null;var count__32834_32838 = (0);var i__32835_32839 = (0);while(true){
if((i__32835_32839 < count__32834_32838))
{var n_32840 = cljs.core._nth.call(null,chunk__32833_32837,i__32835_32839);goog.style.setStyle(n_32840,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32841 = seq__32832_32836;
var G__32842 = chunk__32833_32837;
var G__32843 = count__32834_32838;
var G__32844 = (i__32835_32839 + (1));
seq__32832_32836 = G__32841;
chunk__32833_32837 = G__32842;
count__32834_32838 = G__32843;
i__32835_32839 = G__32844;
continue;
}
} else
{var temp__4126__auto___32845 = cljs.core.seq.call(null,seq__32832_32836);if(temp__4126__auto___32845)
{var seq__32832_32846__$1 = temp__4126__auto___32845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32832_32846__$1))
{var c__4314__auto___32847 = cljs.core.chunk_first.call(null,seq__32832_32846__$1);{
var G__32848 = cljs.core.chunk_rest.call(null,seq__32832_32846__$1);
var G__32849 = c__4314__auto___32847;
var G__32850 = cljs.core.count.call(null,c__4314__auto___32847);
var G__32851 = (0);
seq__32832_32836 = G__32848;
chunk__32833_32837 = G__32849;
count__32834_32838 = G__32850;
i__32835_32839 = G__32851;
continue;
}
} else
{var n_32852 = cljs.core.first.call(null,seq__32832_32846__$1);goog.style.setStyle(n_32852,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32853 = cljs.core.next.call(null,seq__32832_32846__$1);
var G__32854 = null;
var G__32855 = (0);
var G__32856 = (0);
seq__32832_32836 = G__32853;
chunk__32833_32837 = G__32854;
count__32834_32838 = G__32855;
i__32835_32839 = G__32856;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__32857){
var content = cljs.core.first(arglist__32857);
arglist__32857 = cljs.core.next(arglist__32857);
var name = cljs.core.first(arglist__32857);
var value = cljs.core.rest(arglist__32857);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__32862_32866 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32863_32867 = null;var count__32864_32868 = (0);var i__32865_32869 = (0);while(true){
if((i__32865_32869 < count__32864_32868))
{var n_32870 = cljs.core._nth.call(null,chunk__32863_32867,i__32865_32869);n_32870.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32871 = seq__32862_32866;
var G__32872 = chunk__32863_32867;
var G__32873 = count__32864_32868;
var G__32874 = (i__32865_32869 + (1));
seq__32862_32866 = G__32871;
chunk__32863_32867 = G__32872;
count__32864_32868 = G__32873;
i__32865_32869 = G__32874;
continue;
}
} else
{var temp__4126__auto___32875 = cljs.core.seq.call(null,seq__32862_32866);if(temp__4126__auto___32875)
{var seq__32862_32876__$1 = temp__4126__auto___32875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32862_32876__$1))
{var c__4314__auto___32877 = cljs.core.chunk_first.call(null,seq__32862_32876__$1);{
var G__32878 = cljs.core.chunk_rest.call(null,seq__32862_32876__$1);
var G__32879 = c__4314__auto___32877;
var G__32880 = cljs.core.count.call(null,c__4314__auto___32877);
var G__32881 = (0);
seq__32862_32866 = G__32878;
chunk__32863_32867 = G__32879;
count__32864_32868 = G__32880;
i__32865_32869 = G__32881;
continue;
}
} else
{var n_32882 = cljs.core.first.call(null,seq__32862_32876__$1);n_32882.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__32883 = cljs.core.next.call(null,seq__32862_32876__$1);
var G__32884 = null;
var G__32885 = (0);
var G__32886 = (0);
seq__32862_32866 = G__32883;
chunk__32863_32867 = G__32884;
count__32864_32868 = G__32885;
i__32865_32869 = G__32886;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__32887){
var content = cljs.core.first(arglist__32887);
arglist__32887 = cljs.core.next(arglist__32887);
var name = cljs.core.first(arglist__32887);
var value = cljs.core.rest(arglist__32887);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__32892_32896 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32893_32897 = null;var count__32894_32898 = (0);var i__32895_32899 = (0);while(true){
if((i__32895_32899 < count__32894_32898))
{var n_32900 = cljs.core._nth.call(null,chunk__32893_32897,i__32895_32899);n_32900.removeAttribute(cljs.core.name.call(null,name));
{
var G__32901 = seq__32892_32896;
var G__32902 = chunk__32893_32897;
var G__32903 = count__32894_32898;
var G__32904 = (i__32895_32899 + (1));
seq__32892_32896 = G__32901;
chunk__32893_32897 = G__32902;
count__32894_32898 = G__32903;
i__32895_32899 = G__32904;
continue;
}
} else
{var temp__4126__auto___32905 = cljs.core.seq.call(null,seq__32892_32896);if(temp__4126__auto___32905)
{var seq__32892_32906__$1 = temp__4126__auto___32905;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32892_32906__$1))
{var c__4314__auto___32907 = cljs.core.chunk_first.call(null,seq__32892_32906__$1);{
var G__32908 = cljs.core.chunk_rest.call(null,seq__32892_32906__$1);
var G__32909 = c__4314__auto___32907;
var G__32910 = cljs.core.count.call(null,c__4314__auto___32907);
var G__32911 = (0);
seq__32892_32896 = G__32908;
chunk__32893_32897 = G__32909;
count__32894_32898 = G__32910;
i__32895_32899 = G__32911;
continue;
}
} else
{var n_32912 = cljs.core.first.call(null,seq__32892_32906__$1);n_32912.removeAttribute(cljs.core.name.call(null,name));
{
var G__32913 = cljs.core.next.call(null,seq__32892_32906__$1);
var G__32914 = null;
var G__32915 = (0);
var G__32916 = (0);
seq__32892_32896 = G__32913;
chunk__32893_32897 = G__32914;
count__32894_32898 = G__32915;
i__32895_32899 = G__32916;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__32918 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__32918,(0),null);var v = cljs.core.nth.call(null,vec__32918,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__32919_SHARP_){var attr = attrs__$1.item(p1__32919_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__32926_32932 = cljs.core.seq.call(null,styles);var chunk__32927_32933 = null;var count__32928_32934 = (0);var i__32929_32935 = (0);while(true){
if((i__32929_32935 < count__32928_32934))
{var vec__32930_32936 = cljs.core._nth.call(null,chunk__32927_32933,i__32929_32935);var name_32937 = cljs.core.nth.call(null,vec__32930_32936,(0),null);var value_32938 = cljs.core.nth.call(null,vec__32930_32936,(1),null);domina.set_style_BANG_.call(null,content,name_32937,value_32938);
{
var G__32939 = seq__32926_32932;
var G__32940 = chunk__32927_32933;
var G__32941 = count__32928_32934;
var G__32942 = (i__32929_32935 + (1));
seq__32926_32932 = G__32939;
chunk__32927_32933 = G__32940;
count__32928_32934 = G__32941;
i__32929_32935 = G__32942;
continue;
}
} else
{var temp__4126__auto___32943 = cljs.core.seq.call(null,seq__32926_32932);if(temp__4126__auto___32943)
{var seq__32926_32944__$1 = temp__4126__auto___32943;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32926_32944__$1))
{var c__4314__auto___32945 = cljs.core.chunk_first.call(null,seq__32926_32944__$1);{
var G__32946 = cljs.core.chunk_rest.call(null,seq__32926_32944__$1);
var G__32947 = c__4314__auto___32945;
var G__32948 = cljs.core.count.call(null,c__4314__auto___32945);
var G__32949 = (0);
seq__32926_32932 = G__32946;
chunk__32927_32933 = G__32947;
count__32928_32934 = G__32948;
i__32929_32935 = G__32949;
continue;
}
} else
{var vec__32931_32950 = cljs.core.first.call(null,seq__32926_32944__$1);var name_32951 = cljs.core.nth.call(null,vec__32931_32950,(0),null);var value_32952 = cljs.core.nth.call(null,vec__32931_32950,(1),null);domina.set_style_BANG_.call(null,content,name_32951,value_32952);
{
var G__32953 = cljs.core.next.call(null,seq__32926_32944__$1);
var G__32954 = null;
var G__32955 = (0);
var G__32956 = (0);
seq__32926_32932 = G__32953;
chunk__32927_32933 = G__32954;
count__32928_32934 = G__32955;
i__32929_32935 = G__32956;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__32963_32969 = cljs.core.seq.call(null,attrs);var chunk__32964_32970 = null;var count__32965_32971 = (0);var i__32966_32972 = (0);while(true){
if((i__32966_32972 < count__32965_32971))
{var vec__32967_32973 = cljs.core._nth.call(null,chunk__32964_32970,i__32966_32972);var name_32974 = cljs.core.nth.call(null,vec__32967_32973,(0),null);var value_32975 = cljs.core.nth.call(null,vec__32967_32973,(1),null);domina.set_attr_BANG_.call(null,content,name_32974,value_32975);
{
var G__32976 = seq__32963_32969;
var G__32977 = chunk__32964_32970;
var G__32978 = count__32965_32971;
var G__32979 = (i__32966_32972 + (1));
seq__32963_32969 = G__32976;
chunk__32964_32970 = G__32977;
count__32965_32971 = G__32978;
i__32966_32972 = G__32979;
continue;
}
} else
{var temp__4126__auto___32980 = cljs.core.seq.call(null,seq__32963_32969);if(temp__4126__auto___32980)
{var seq__32963_32981__$1 = temp__4126__auto___32980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32963_32981__$1))
{var c__4314__auto___32982 = cljs.core.chunk_first.call(null,seq__32963_32981__$1);{
var G__32983 = cljs.core.chunk_rest.call(null,seq__32963_32981__$1);
var G__32984 = c__4314__auto___32982;
var G__32985 = cljs.core.count.call(null,c__4314__auto___32982);
var G__32986 = (0);
seq__32963_32969 = G__32983;
chunk__32964_32970 = G__32984;
count__32965_32971 = G__32985;
i__32966_32972 = G__32986;
continue;
}
} else
{var vec__32968_32987 = cljs.core.first.call(null,seq__32963_32981__$1);var name_32988 = cljs.core.nth.call(null,vec__32968_32987,(0),null);var value_32989 = cljs.core.nth.call(null,vec__32968_32987,(1),null);domina.set_attr_BANG_.call(null,content,name_32988,value_32989);
{
var G__32990 = cljs.core.next.call(null,seq__32963_32981__$1);
var G__32991 = null;
var G__32992 = (0);
var G__32993 = (0);
seq__32963_32969 = G__32990;
chunk__32964_32970 = G__32991;
count__32965_32971 = G__32992;
i__32966_32972 = G__32993;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__32998_33002 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__32999_33003 = null;var count__33000_33004 = (0);var i__33001_33005 = (0);while(true){
if((i__33001_33005 < count__33000_33004))
{var node_33006 = cljs.core._nth.call(null,chunk__32999_33003,i__33001_33005);goog.dom.classes.add(node_33006,class$);
{
var G__33007 = seq__32998_33002;
var G__33008 = chunk__32999_33003;
var G__33009 = count__33000_33004;
var G__33010 = (i__33001_33005 + (1));
seq__32998_33002 = G__33007;
chunk__32999_33003 = G__33008;
count__33000_33004 = G__33009;
i__33001_33005 = G__33010;
continue;
}
} else
{var temp__4126__auto___33011 = cljs.core.seq.call(null,seq__32998_33002);if(temp__4126__auto___33011)
{var seq__32998_33012__$1 = temp__4126__auto___33011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32998_33012__$1))
{var c__4314__auto___33013 = cljs.core.chunk_first.call(null,seq__32998_33012__$1);{
var G__33014 = cljs.core.chunk_rest.call(null,seq__32998_33012__$1);
var G__33015 = c__4314__auto___33013;
var G__33016 = cljs.core.count.call(null,c__4314__auto___33013);
var G__33017 = (0);
seq__32998_33002 = G__33014;
chunk__32999_33003 = G__33015;
count__33000_33004 = G__33016;
i__33001_33005 = G__33017;
continue;
}
} else
{var node_33018 = cljs.core.first.call(null,seq__32998_33012__$1);goog.dom.classes.add(node_33018,class$);
{
var G__33019 = cljs.core.next.call(null,seq__32998_33012__$1);
var G__33020 = null;
var G__33021 = (0);
var G__33022 = (0);
seq__32998_33002 = G__33019;
chunk__32999_33003 = G__33020;
count__33000_33004 = G__33021;
i__33001_33005 = G__33022;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__33027_33031 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33028_33032 = null;var count__33029_33033 = (0);var i__33030_33034 = (0);while(true){
if((i__33030_33034 < count__33029_33033))
{var node_33035 = cljs.core._nth.call(null,chunk__33028_33032,i__33030_33034);goog.dom.classes.remove(node_33035,class$);
{
var G__33036 = seq__33027_33031;
var G__33037 = chunk__33028_33032;
var G__33038 = count__33029_33033;
var G__33039 = (i__33030_33034 + (1));
seq__33027_33031 = G__33036;
chunk__33028_33032 = G__33037;
count__33029_33033 = G__33038;
i__33030_33034 = G__33039;
continue;
}
} else
{var temp__4126__auto___33040 = cljs.core.seq.call(null,seq__33027_33031);if(temp__4126__auto___33040)
{var seq__33027_33041__$1 = temp__4126__auto___33040;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33027_33041__$1))
{var c__4314__auto___33042 = cljs.core.chunk_first.call(null,seq__33027_33041__$1);{
var G__33043 = cljs.core.chunk_rest.call(null,seq__33027_33041__$1);
var G__33044 = c__4314__auto___33042;
var G__33045 = cljs.core.count.call(null,c__4314__auto___33042);
var G__33046 = (0);
seq__33027_33031 = G__33043;
chunk__33028_33032 = G__33044;
count__33029_33033 = G__33045;
i__33030_33034 = G__33046;
continue;
}
} else
{var node_33047 = cljs.core.first.call(null,seq__33027_33041__$1);goog.dom.classes.remove(node_33047,class$);
{
var G__33048 = cljs.core.next.call(null,seq__33027_33041__$1);
var G__33049 = null;
var G__33050 = (0);
var G__33051 = (0);
seq__33027_33031 = G__33048;
chunk__33028_33032 = G__33049;
count__33029_33033 = G__33050;
i__33030_33034 = G__33051;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__33056_33060 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33057_33061 = null;var count__33058_33062 = (0);var i__33059_33063 = (0);while(true){
if((i__33059_33063 < count__33058_33062))
{var node_33064 = cljs.core._nth.call(null,chunk__33057_33061,i__33059_33063);goog.dom.classes.toggle(node_33064,class$);
{
var G__33065 = seq__33056_33060;
var G__33066 = chunk__33057_33061;
var G__33067 = count__33058_33062;
var G__33068 = (i__33059_33063 + (1));
seq__33056_33060 = G__33065;
chunk__33057_33061 = G__33066;
count__33058_33062 = G__33067;
i__33059_33063 = G__33068;
continue;
}
} else
{var temp__4126__auto___33069 = cljs.core.seq.call(null,seq__33056_33060);if(temp__4126__auto___33069)
{var seq__33056_33070__$1 = temp__4126__auto___33069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33056_33070__$1))
{var c__4314__auto___33071 = cljs.core.chunk_first.call(null,seq__33056_33070__$1);{
var G__33072 = cljs.core.chunk_rest.call(null,seq__33056_33070__$1);
var G__33073 = c__4314__auto___33071;
var G__33074 = cljs.core.count.call(null,c__4314__auto___33071);
var G__33075 = (0);
seq__33056_33060 = G__33072;
chunk__33057_33061 = G__33073;
count__33058_33062 = G__33074;
i__33059_33063 = G__33075;
continue;
}
} else
{var node_33076 = cljs.core.first.call(null,seq__33056_33070__$1);goog.dom.classes.toggle(node_33076,class$);
{
var G__33077 = cljs.core.next.call(null,seq__33056_33070__$1);
var G__33078 = null;
var G__33079 = (0);
var G__33080 = (0);
seq__33056_33060 = G__33077;
chunk__33057_33061 = G__33078;
count__33058_33062 = G__33079;
i__33059_33063 = G__33080;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_33089__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__33085_33090 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33086_33091 = null;var count__33087_33092 = (0);var i__33088_33093 = (0);while(true){
if((i__33088_33093 < count__33087_33092))
{var node_33094 = cljs.core._nth.call(null,chunk__33086_33091,i__33088_33093);goog.dom.classes.set(node_33094,classes_33089__$1);
{
var G__33095 = seq__33085_33090;
var G__33096 = chunk__33086_33091;
var G__33097 = count__33087_33092;
var G__33098 = (i__33088_33093 + (1));
seq__33085_33090 = G__33095;
chunk__33086_33091 = G__33096;
count__33087_33092 = G__33097;
i__33088_33093 = G__33098;
continue;
}
} else
{var temp__4126__auto___33099 = cljs.core.seq.call(null,seq__33085_33090);if(temp__4126__auto___33099)
{var seq__33085_33100__$1 = temp__4126__auto___33099;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33085_33100__$1))
{var c__4314__auto___33101 = cljs.core.chunk_first.call(null,seq__33085_33100__$1);{
var G__33102 = cljs.core.chunk_rest.call(null,seq__33085_33100__$1);
var G__33103 = c__4314__auto___33101;
var G__33104 = cljs.core.count.call(null,c__4314__auto___33101);
var G__33105 = (0);
seq__33085_33090 = G__33102;
chunk__33086_33091 = G__33103;
count__33087_33092 = G__33104;
i__33088_33093 = G__33105;
continue;
}
} else
{var node_33106 = cljs.core.first.call(null,seq__33085_33100__$1);goog.dom.classes.set(node_33106,classes_33089__$1);
{
var G__33107 = cljs.core.next.call(null,seq__33085_33100__$1);
var G__33108 = null;
var G__33109 = (0);
var G__33110 = (0);
seq__33085_33090 = G__33107;
chunk__33086_33091 = G__33108;
count__33087_33092 = G__33109;
i__33088_33093 = G__33110;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__33115_33119 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33116_33120 = null;var count__33117_33121 = (0);var i__33118_33122 = (0);while(true){
if((i__33118_33122 < count__33117_33121))
{var node_33123 = cljs.core._nth.call(null,chunk__33116_33120,i__33118_33122);goog.dom.setTextContent(node_33123,value);
{
var G__33124 = seq__33115_33119;
var G__33125 = chunk__33116_33120;
var G__33126 = count__33117_33121;
var G__33127 = (i__33118_33122 + (1));
seq__33115_33119 = G__33124;
chunk__33116_33120 = G__33125;
count__33117_33121 = G__33126;
i__33118_33122 = G__33127;
continue;
}
} else
{var temp__4126__auto___33128 = cljs.core.seq.call(null,seq__33115_33119);if(temp__4126__auto___33128)
{var seq__33115_33129__$1 = temp__4126__auto___33128;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33115_33129__$1))
{var c__4314__auto___33130 = cljs.core.chunk_first.call(null,seq__33115_33129__$1);{
var G__33131 = cljs.core.chunk_rest.call(null,seq__33115_33129__$1);
var G__33132 = c__4314__auto___33130;
var G__33133 = cljs.core.count.call(null,c__4314__auto___33130);
var G__33134 = (0);
seq__33115_33119 = G__33131;
chunk__33116_33120 = G__33132;
count__33117_33121 = G__33133;
i__33118_33122 = G__33134;
continue;
}
} else
{var node_33135 = cljs.core.first.call(null,seq__33115_33129__$1);goog.dom.setTextContent(node_33135,value);
{
var G__33136 = cljs.core.next.call(null,seq__33115_33129__$1);
var G__33137 = null;
var G__33138 = (0);
var G__33139 = (0);
seq__33115_33119 = G__33136;
chunk__33116_33120 = G__33137;
count__33117_33121 = G__33138;
i__33118_33122 = G__33139;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__33144_33148 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33145_33149 = null;var count__33146_33150 = (0);var i__33147_33151 = (0);while(true){
if((i__33147_33151 < count__33146_33150))
{var node_33152 = cljs.core._nth.call(null,chunk__33145_33149,i__33147_33151);goog.dom.forms.setValue(node_33152,value);
{
var G__33153 = seq__33144_33148;
var G__33154 = chunk__33145_33149;
var G__33155 = count__33146_33150;
var G__33156 = (i__33147_33151 + (1));
seq__33144_33148 = G__33153;
chunk__33145_33149 = G__33154;
count__33146_33150 = G__33155;
i__33147_33151 = G__33156;
continue;
}
} else
{var temp__4126__auto___33157 = cljs.core.seq.call(null,seq__33144_33148);if(temp__4126__auto___33157)
{var seq__33144_33158__$1 = temp__4126__auto___33157;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33144_33158__$1))
{var c__4314__auto___33159 = cljs.core.chunk_first.call(null,seq__33144_33158__$1);{
var G__33160 = cljs.core.chunk_rest.call(null,seq__33144_33158__$1);
var G__33161 = c__4314__auto___33159;
var G__33162 = cljs.core.count.call(null,c__4314__auto___33159);
var G__33163 = (0);
seq__33144_33148 = G__33160;
chunk__33145_33149 = G__33161;
count__33146_33150 = G__33162;
i__33147_33151 = G__33163;
continue;
}
} else
{var node_33164 = cljs.core.first.call(null,seq__33144_33158__$1);goog.dom.forms.setValue(node_33164,value);
{
var G__33165 = cljs.core.next.call(null,seq__33144_33158__$1);
var G__33166 = null;
var G__33167 = (0);
var G__33168 = (0);
seq__33144_33148 = G__33165;
chunk__33145_33149 = G__33166;
count__33146_33150 = G__33167;
i__33147_33151 = G__33168;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_33179 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__33175_33180 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__33176_33181 = null;var count__33177_33182 = (0);var i__33178_33183 = (0);while(true){
if((i__33178_33183 < count__33177_33182))
{var node_33184 = cljs.core._nth.call(null,chunk__33176_33181,i__33178_33183);node_33184.innerHTML = value_33179;
{
var G__33185 = seq__33175_33180;
var G__33186 = chunk__33176_33181;
var G__33187 = count__33177_33182;
var G__33188 = (i__33178_33183 + (1));
seq__33175_33180 = G__33185;
chunk__33176_33181 = G__33186;
count__33177_33182 = G__33187;
i__33178_33183 = G__33188;
continue;
}
} else
{var temp__4126__auto___33189 = cljs.core.seq.call(null,seq__33175_33180);if(temp__4126__auto___33189)
{var seq__33175_33190__$1 = temp__4126__auto___33189;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33175_33190__$1))
{var c__4314__auto___33191 = cljs.core.chunk_first.call(null,seq__33175_33190__$1);{
var G__33192 = cljs.core.chunk_rest.call(null,seq__33175_33190__$1);
var G__33193 = c__4314__auto___33191;
var G__33194 = cljs.core.count.call(null,c__4314__auto___33191);
var G__33195 = (0);
seq__33175_33180 = G__33192;
chunk__33176_33181 = G__33193;
count__33177_33182 = G__33194;
i__33178_33183 = G__33195;
continue;
}
} else
{var node_33196 = cljs.core.first.call(null,seq__33175_33190__$1);node_33196.innerHTML = value_33179;
{
var G__33197 = cljs.core.next.call(null,seq__33175_33190__$1);
var G__33198 = null;
var G__33199 = (0);
var G__33200 = (0);
seq__33175_33180 = G__33197;
chunk__33176_33181 = G__33198;
count__33177_33182 = G__33199;
i__33178_33183 = G__33200;
continue;
}
}
} else
{}
}
break;
}
}catch (e33174){if((e33174 instanceof Error))
{var e_33201 = e33174;domina.replace_children_BANG_.call(null,content,value_33179);
} else
{throw e33174;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__33208_33212 = cljs.core.seq.call(null,children);var chunk__33209_33213 = null;var count__33210_33214 = (0);var i__33211_33215 = (0);while(true){
if((i__33211_33215 < count__33210_33214))
{var child_33216 = cljs.core._nth.call(null,chunk__33209_33213,i__33211_33215);frag.appendChild(child_33216);
{
var G__33217 = seq__33208_33212;
var G__33218 = chunk__33209_33213;
var G__33219 = count__33210_33214;
var G__33220 = (i__33211_33215 + (1));
seq__33208_33212 = G__33217;
chunk__33209_33213 = G__33218;
count__33210_33214 = G__33219;
i__33211_33215 = G__33220;
continue;
}
} else
{var temp__4126__auto___33221 = cljs.core.seq.call(null,seq__33208_33212);if(temp__4126__auto___33221)
{var seq__33208_33222__$1 = temp__4126__auto___33221;if(cljs.core.chunked_seq_QMARK_.call(null,seq__33208_33222__$1))
{var c__4314__auto___33223 = cljs.core.chunk_first.call(null,seq__33208_33222__$1);{
var G__33224 = cljs.core.chunk_rest.call(null,seq__33208_33222__$1);
var G__33225 = c__4314__auto___33223;
var G__33226 = cljs.core.count.call(null,c__4314__auto___33223);
var G__33227 = (0);
seq__33208_33212 = G__33224;
chunk__33209_33213 = G__33225;
count__33210_33214 = G__33226;
i__33211_33215 = G__33227;
continue;
}
} else
{var child_33228 = cljs.core.first.call(null,seq__33208_33222__$1);frag.appendChild(child_33228);
{
var G__33229 = cljs.core.next.call(null,seq__33208_33222__$1);
var G__33230 = null;
var G__33231 = (0);
var G__33232 = (0);
seq__33208_33212 = G__33229;
chunk__33209_33213 = G__33230;
count__33210_33214 = G__33231;
i__33211_33215 = G__33232;
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
return (function (p1__33202_SHARP_,p2__33203_SHARP_){return f.call(null,p1__33202_SHARP_,p2__33203_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
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
{if((function (){var G__33234 = list_thing;if(G__33234)
{var bit__4208__auto__ = (G__33234.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__33234.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33234.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33234);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33234);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__33235 = content;if(G__33235)
{var bit__4208__auto__ = (G__33235.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__33235.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33235.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33235);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33235);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__33236 = content;if(G__33236)
{var bit__4208__auto__ = (G__33236.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__33236.cljs$core$ISeqable$))
{return true;
} else
{if((!G__33236.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33236);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__33236);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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
