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
var opt_wrapper_15824 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15825 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15826 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15825,table_section_wrapper_15825,opt_wrapper_15824,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15826,table_section_wrapper_15825,cell_wrapper_15826,opt_wrapper_15824,table_section_wrapper_15825,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15825]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15831 = cljs.core.seq.call(null,tbody);var chunk__15832 = null;var count__15833 = 0;var i__15834 = 0;while(true){
if((i__15834 < count__15833))
{var child = cljs.core._nth.call(null,chunk__15832,i__15834);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15835 = seq__15831;
var G__15836 = chunk__15832;
var G__15837 = count__15833;
var G__15838 = (i__15834 + 1);
seq__15831 = G__15835;
chunk__15832 = G__15836;
count__15833 = G__15837;
i__15834 = G__15838;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15831);if(temp__4092__auto__)
{var seq__15831__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15831__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15831__$1);{
var G__15839 = cljs.core.chunk_rest.call(null,seq__15831__$1);
var G__15840 = c__4148__auto__;
var G__15841 = cljs.core.count.call(null,c__4148__auto__);
var G__15842 = 0;
seq__15831 = G__15839;
chunk__15832 = G__15840;
count__15833 = G__15841;
i__15834 = G__15842;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15831__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15843 = cljs.core.next.call(null,seq__15831__$1);
var G__15844 = null;
var G__15845 = 0;
var G__15846 = 0;
seq__15831 = G__15843;
chunk__15832 = G__15844;
count__15833 = G__15845;
i__15834 = G__15846;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15848 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15848,0,null);var start_wrap = cljs.core.nth.call(null,vec__15848,1,null);var end_wrap = cljs.core.nth.call(null,vec__15848,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15849 = wrapper.lastChild;
var G__15850 = (level - 1);
wrapper = G__15849;
level = G__15850;
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
domina.DomContent = (function (){var obj15852 = {};return obj15852;
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
log_debug.cljs$lang$applyTo = (function (arglist__15853){
var mesg = cljs.core.seq(arglist__15853);
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
log.cljs$lang$applyTo = (function (arglist__15854){
var mesg = cljs.core.seq(arglist__15854);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15855){
var contents = cljs.core.seq(arglist__15855);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15856_SHARP_){return p1__15856_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15857_SHARP_,p2__15858_SHARP_){return goog.dom.insertChildAt(p1__15857_SHARP_,p2__15858_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15860_SHARP_,p2__15859_SHARP_){return goog.dom.insertSiblingBefore(p2__15859_SHARP_,p1__15860_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15862_SHARP_,p2__15861_SHARP_){return goog.dom.insertSiblingAfter(p2__15861_SHARP_,p1__15862_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15864_SHARP_,p2__15863_SHARP_){return goog.dom.replaceNode(p2__15863_SHARP_,p1__15864_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15869_15873 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15870_15874 = null;var count__15871_15875 = 0;var i__15872_15876 = 0;while(true){
if((i__15872_15876 < count__15871_15875))
{var n_15877 = cljs.core._nth.call(null,chunk__15870_15874,i__15872_15876);goog.style.setStyle(n_15877,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15878 = seq__15869_15873;
var G__15879 = chunk__15870_15874;
var G__15880 = count__15871_15875;
var G__15881 = (i__15872_15876 + 1);
seq__15869_15873 = G__15878;
chunk__15870_15874 = G__15879;
count__15871_15875 = G__15880;
i__15872_15876 = G__15881;
continue;
}
} else
{var temp__4092__auto___15882 = cljs.core.seq.call(null,seq__15869_15873);if(temp__4092__auto___15882)
{var seq__15869_15883__$1 = temp__4092__auto___15882;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15869_15883__$1))
{var c__4148__auto___15884 = cljs.core.chunk_first.call(null,seq__15869_15883__$1);{
var G__15885 = cljs.core.chunk_rest.call(null,seq__15869_15883__$1);
var G__15886 = c__4148__auto___15884;
var G__15887 = cljs.core.count.call(null,c__4148__auto___15884);
var G__15888 = 0;
seq__15869_15873 = G__15885;
chunk__15870_15874 = G__15886;
count__15871_15875 = G__15887;
i__15872_15876 = G__15888;
continue;
}
} else
{var n_15889 = cljs.core.first.call(null,seq__15869_15883__$1);goog.style.setStyle(n_15889,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15890 = cljs.core.next.call(null,seq__15869_15883__$1);
var G__15891 = null;
var G__15892 = 0;
var G__15893 = 0;
seq__15869_15873 = G__15890;
chunk__15870_15874 = G__15891;
count__15871_15875 = G__15892;
i__15872_15876 = G__15893;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15894){
var content = cljs.core.first(arglist__15894);
arglist__15894 = cljs.core.next(arglist__15894);
var name = cljs.core.first(arglist__15894);
var value = cljs.core.rest(arglist__15894);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15899_15903 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15900_15904 = null;var count__15901_15905 = 0;var i__15902_15906 = 0;while(true){
if((i__15902_15906 < count__15901_15905))
{var n_15907 = cljs.core._nth.call(null,chunk__15900_15904,i__15902_15906);n_15907.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15908 = seq__15899_15903;
var G__15909 = chunk__15900_15904;
var G__15910 = count__15901_15905;
var G__15911 = (i__15902_15906 + 1);
seq__15899_15903 = G__15908;
chunk__15900_15904 = G__15909;
count__15901_15905 = G__15910;
i__15902_15906 = G__15911;
continue;
}
} else
{var temp__4092__auto___15912 = cljs.core.seq.call(null,seq__15899_15903);if(temp__4092__auto___15912)
{var seq__15899_15913__$1 = temp__4092__auto___15912;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15899_15913__$1))
{var c__4148__auto___15914 = cljs.core.chunk_first.call(null,seq__15899_15913__$1);{
var G__15915 = cljs.core.chunk_rest.call(null,seq__15899_15913__$1);
var G__15916 = c__4148__auto___15914;
var G__15917 = cljs.core.count.call(null,c__4148__auto___15914);
var G__15918 = 0;
seq__15899_15903 = G__15915;
chunk__15900_15904 = G__15916;
count__15901_15905 = G__15917;
i__15902_15906 = G__15918;
continue;
}
} else
{var n_15919 = cljs.core.first.call(null,seq__15899_15913__$1);n_15919.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15920 = cljs.core.next.call(null,seq__15899_15913__$1);
var G__15921 = null;
var G__15922 = 0;
var G__15923 = 0;
seq__15899_15903 = G__15920;
chunk__15900_15904 = G__15921;
count__15901_15905 = G__15922;
i__15902_15906 = G__15923;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15924){
var content = cljs.core.first(arglist__15924);
arglist__15924 = cljs.core.next(arglist__15924);
var name = cljs.core.first(arglist__15924);
var value = cljs.core.rest(arglist__15924);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15929_15933 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15930_15934 = null;var count__15931_15935 = 0;var i__15932_15936 = 0;while(true){
if((i__15932_15936 < count__15931_15935))
{var n_15937 = cljs.core._nth.call(null,chunk__15930_15934,i__15932_15936);n_15937.removeAttribute(cljs.core.name.call(null,name));
{
var G__15938 = seq__15929_15933;
var G__15939 = chunk__15930_15934;
var G__15940 = count__15931_15935;
var G__15941 = (i__15932_15936 + 1);
seq__15929_15933 = G__15938;
chunk__15930_15934 = G__15939;
count__15931_15935 = G__15940;
i__15932_15936 = G__15941;
continue;
}
} else
{var temp__4092__auto___15942 = cljs.core.seq.call(null,seq__15929_15933);if(temp__4092__auto___15942)
{var seq__15929_15943__$1 = temp__4092__auto___15942;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15929_15943__$1))
{var c__4148__auto___15944 = cljs.core.chunk_first.call(null,seq__15929_15943__$1);{
var G__15945 = cljs.core.chunk_rest.call(null,seq__15929_15943__$1);
var G__15946 = c__4148__auto___15944;
var G__15947 = cljs.core.count.call(null,c__4148__auto___15944);
var G__15948 = 0;
seq__15929_15933 = G__15945;
chunk__15930_15934 = G__15946;
count__15931_15935 = G__15947;
i__15932_15936 = G__15948;
continue;
}
} else
{var n_15949 = cljs.core.first.call(null,seq__15929_15943__$1);n_15949.removeAttribute(cljs.core.name.call(null,name));
{
var G__15950 = cljs.core.next.call(null,seq__15929_15943__$1);
var G__15951 = null;
var G__15952 = 0;
var G__15953 = 0;
seq__15929_15933 = G__15950;
chunk__15930_15934 = G__15951;
count__15931_15935 = G__15952;
i__15932_15936 = G__15953;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15955 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15955,0,null);var v = cljs.core.nth.call(null,vec__15955,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15956_SHARP_){var attr = attrs__$1.item(p1__15956_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__15963_15969 = cljs.core.seq.call(null,styles);var chunk__15964_15970 = null;var count__15965_15971 = 0;var i__15966_15972 = 0;while(true){
if((i__15966_15972 < count__15965_15971))
{var vec__15967_15973 = cljs.core._nth.call(null,chunk__15964_15970,i__15966_15972);var name_15974 = cljs.core.nth.call(null,vec__15967_15973,0,null);var value_15975 = cljs.core.nth.call(null,vec__15967_15973,1,null);domina.set_style_BANG_.call(null,content,name_15974,value_15975);
{
var G__15976 = seq__15963_15969;
var G__15977 = chunk__15964_15970;
var G__15978 = count__15965_15971;
var G__15979 = (i__15966_15972 + 1);
seq__15963_15969 = G__15976;
chunk__15964_15970 = G__15977;
count__15965_15971 = G__15978;
i__15966_15972 = G__15979;
continue;
}
} else
{var temp__4092__auto___15980 = cljs.core.seq.call(null,seq__15963_15969);if(temp__4092__auto___15980)
{var seq__15963_15981__$1 = temp__4092__auto___15980;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15963_15981__$1))
{var c__4148__auto___15982 = cljs.core.chunk_first.call(null,seq__15963_15981__$1);{
var G__15983 = cljs.core.chunk_rest.call(null,seq__15963_15981__$1);
var G__15984 = c__4148__auto___15982;
var G__15985 = cljs.core.count.call(null,c__4148__auto___15982);
var G__15986 = 0;
seq__15963_15969 = G__15983;
chunk__15964_15970 = G__15984;
count__15965_15971 = G__15985;
i__15966_15972 = G__15986;
continue;
}
} else
{var vec__15968_15987 = cljs.core.first.call(null,seq__15963_15981__$1);var name_15988 = cljs.core.nth.call(null,vec__15968_15987,0,null);var value_15989 = cljs.core.nth.call(null,vec__15968_15987,1,null);domina.set_style_BANG_.call(null,content,name_15988,value_15989);
{
var G__15990 = cljs.core.next.call(null,seq__15963_15981__$1);
var G__15991 = null;
var G__15992 = 0;
var G__15993 = 0;
seq__15963_15969 = G__15990;
chunk__15964_15970 = G__15991;
count__15965_15971 = G__15992;
i__15966_15972 = G__15993;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16000_16006 = cljs.core.seq.call(null,attrs);var chunk__16001_16007 = null;var count__16002_16008 = 0;var i__16003_16009 = 0;while(true){
if((i__16003_16009 < count__16002_16008))
{var vec__16004_16010 = cljs.core._nth.call(null,chunk__16001_16007,i__16003_16009);var name_16011 = cljs.core.nth.call(null,vec__16004_16010,0,null);var value_16012 = cljs.core.nth.call(null,vec__16004_16010,1,null);domina.set_attr_BANG_.call(null,content,name_16011,value_16012);
{
var G__16013 = seq__16000_16006;
var G__16014 = chunk__16001_16007;
var G__16015 = count__16002_16008;
var G__16016 = (i__16003_16009 + 1);
seq__16000_16006 = G__16013;
chunk__16001_16007 = G__16014;
count__16002_16008 = G__16015;
i__16003_16009 = G__16016;
continue;
}
} else
{var temp__4092__auto___16017 = cljs.core.seq.call(null,seq__16000_16006);if(temp__4092__auto___16017)
{var seq__16000_16018__$1 = temp__4092__auto___16017;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16000_16018__$1))
{var c__4148__auto___16019 = cljs.core.chunk_first.call(null,seq__16000_16018__$1);{
var G__16020 = cljs.core.chunk_rest.call(null,seq__16000_16018__$1);
var G__16021 = c__4148__auto___16019;
var G__16022 = cljs.core.count.call(null,c__4148__auto___16019);
var G__16023 = 0;
seq__16000_16006 = G__16020;
chunk__16001_16007 = G__16021;
count__16002_16008 = G__16022;
i__16003_16009 = G__16023;
continue;
}
} else
{var vec__16005_16024 = cljs.core.first.call(null,seq__16000_16018__$1);var name_16025 = cljs.core.nth.call(null,vec__16005_16024,0,null);var value_16026 = cljs.core.nth.call(null,vec__16005_16024,1,null);domina.set_attr_BANG_.call(null,content,name_16025,value_16026);
{
var G__16027 = cljs.core.next.call(null,seq__16000_16018__$1);
var G__16028 = null;
var G__16029 = 0;
var G__16030 = 0;
seq__16000_16006 = G__16027;
chunk__16001_16007 = G__16028;
count__16002_16008 = G__16029;
i__16003_16009 = G__16030;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16035_16039 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16036_16040 = null;var count__16037_16041 = 0;var i__16038_16042 = 0;while(true){
if((i__16038_16042 < count__16037_16041))
{var node_16043 = cljs.core._nth.call(null,chunk__16036_16040,i__16038_16042);goog.dom.classes.add(node_16043,class$);
{
var G__16044 = seq__16035_16039;
var G__16045 = chunk__16036_16040;
var G__16046 = count__16037_16041;
var G__16047 = (i__16038_16042 + 1);
seq__16035_16039 = G__16044;
chunk__16036_16040 = G__16045;
count__16037_16041 = G__16046;
i__16038_16042 = G__16047;
continue;
}
} else
{var temp__4092__auto___16048 = cljs.core.seq.call(null,seq__16035_16039);if(temp__4092__auto___16048)
{var seq__16035_16049__$1 = temp__4092__auto___16048;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16035_16049__$1))
{var c__4148__auto___16050 = cljs.core.chunk_first.call(null,seq__16035_16049__$1);{
var G__16051 = cljs.core.chunk_rest.call(null,seq__16035_16049__$1);
var G__16052 = c__4148__auto___16050;
var G__16053 = cljs.core.count.call(null,c__4148__auto___16050);
var G__16054 = 0;
seq__16035_16039 = G__16051;
chunk__16036_16040 = G__16052;
count__16037_16041 = G__16053;
i__16038_16042 = G__16054;
continue;
}
} else
{var node_16055 = cljs.core.first.call(null,seq__16035_16049__$1);goog.dom.classes.add(node_16055,class$);
{
var G__16056 = cljs.core.next.call(null,seq__16035_16049__$1);
var G__16057 = null;
var G__16058 = 0;
var G__16059 = 0;
seq__16035_16039 = G__16056;
chunk__16036_16040 = G__16057;
count__16037_16041 = G__16058;
i__16038_16042 = G__16059;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16064_16068 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16065_16069 = null;var count__16066_16070 = 0;var i__16067_16071 = 0;while(true){
if((i__16067_16071 < count__16066_16070))
{var node_16072 = cljs.core._nth.call(null,chunk__16065_16069,i__16067_16071);goog.dom.classes.remove(node_16072,class$);
{
var G__16073 = seq__16064_16068;
var G__16074 = chunk__16065_16069;
var G__16075 = count__16066_16070;
var G__16076 = (i__16067_16071 + 1);
seq__16064_16068 = G__16073;
chunk__16065_16069 = G__16074;
count__16066_16070 = G__16075;
i__16067_16071 = G__16076;
continue;
}
} else
{var temp__4092__auto___16077 = cljs.core.seq.call(null,seq__16064_16068);if(temp__4092__auto___16077)
{var seq__16064_16078__$1 = temp__4092__auto___16077;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16064_16078__$1))
{var c__4148__auto___16079 = cljs.core.chunk_first.call(null,seq__16064_16078__$1);{
var G__16080 = cljs.core.chunk_rest.call(null,seq__16064_16078__$1);
var G__16081 = c__4148__auto___16079;
var G__16082 = cljs.core.count.call(null,c__4148__auto___16079);
var G__16083 = 0;
seq__16064_16068 = G__16080;
chunk__16065_16069 = G__16081;
count__16066_16070 = G__16082;
i__16067_16071 = G__16083;
continue;
}
} else
{var node_16084 = cljs.core.first.call(null,seq__16064_16078__$1);goog.dom.classes.remove(node_16084,class$);
{
var G__16085 = cljs.core.next.call(null,seq__16064_16078__$1);
var G__16086 = null;
var G__16087 = 0;
var G__16088 = 0;
seq__16064_16068 = G__16085;
chunk__16065_16069 = G__16086;
count__16066_16070 = G__16087;
i__16067_16071 = G__16088;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16093_16097 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16094_16098 = null;var count__16095_16099 = 0;var i__16096_16100 = 0;while(true){
if((i__16096_16100 < count__16095_16099))
{var node_16101 = cljs.core._nth.call(null,chunk__16094_16098,i__16096_16100);goog.dom.classes.toggle(node_16101,class$);
{
var G__16102 = seq__16093_16097;
var G__16103 = chunk__16094_16098;
var G__16104 = count__16095_16099;
var G__16105 = (i__16096_16100 + 1);
seq__16093_16097 = G__16102;
chunk__16094_16098 = G__16103;
count__16095_16099 = G__16104;
i__16096_16100 = G__16105;
continue;
}
} else
{var temp__4092__auto___16106 = cljs.core.seq.call(null,seq__16093_16097);if(temp__4092__auto___16106)
{var seq__16093_16107__$1 = temp__4092__auto___16106;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16093_16107__$1))
{var c__4148__auto___16108 = cljs.core.chunk_first.call(null,seq__16093_16107__$1);{
var G__16109 = cljs.core.chunk_rest.call(null,seq__16093_16107__$1);
var G__16110 = c__4148__auto___16108;
var G__16111 = cljs.core.count.call(null,c__4148__auto___16108);
var G__16112 = 0;
seq__16093_16097 = G__16109;
chunk__16094_16098 = G__16110;
count__16095_16099 = G__16111;
i__16096_16100 = G__16112;
continue;
}
} else
{var node_16113 = cljs.core.first.call(null,seq__16093_16107__$1);goog.dom.classes.toggle(node_16113,class$);
{
var G__16114 = cljs.core.next.call(null,seq__16093_16107__$1);
var G__16115 = null;
var G__16116 = 0;
var G__16117 = 0;
seq__16093_16097 = G__16114;
chunk__16094_16098 = G__16115;
count__16095_16099 = G__16116;
i__16096_16100 = G__16117;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16126__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16122_16127 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16123_16128 = null;var count__16124_16129 = 0;var i__16125_16130 = 0;while(true){
if((i__16125_16130 < count__16124_16129))
{var node_16131 = cljs.core._nth.call(null,chunk__16123_16128,i__16125_16130);goog.dom.classes.set(node_16131,classes_16126__$1);
{
var G__16132 = seq__16122_16127;
var G__16133 = chunk__16123_16128;
var G__16134 = count__16124_16129;
var G__16135 = (i__16125_16130 + 1);
seq__16122_16127 = G__16132;
chunk__16123_16128 = G__16133;
count__16124_16129 = G__16134;
i__16125_16130 = G__16135;
continue;
}
} else
{var temp__4092__auto___16136 = cljs.core.seq.call(null,seq__16122_16127);if(temp__4092__auto___16136)
{var seq__16122_16137__$1 = temp__4092__auto___16136;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16122_16137__$1))
{var c__4148__auto___16138 = cljs.core.chunk_first.call(null,seq__16122_16137__$1);{
var G__16139 = cljs.core.chunk_rest.call(null,seq__16122_16137__$1);
var G__16140 = c__4148__auto___16138;
var G__16141 = cljs.core.count.call(null,c__4148__auto___16138);
var G__16142 = 0;
seq__16122_16127 = G__16139;
chunk__16123_16128 = G__16140;
count__16124_16129 = G__16141;
i__16125_16130 = G__16142;
continue;
}
} else
{var node_16143 = cljs.core.first.call(null,seq__16122_16137__$1);goog.dom.classes.set(node_16143,classes_16126__$1);
{
var G__16144 = cljs.core.next.call(null,seq__16122_16137__$1);
var G__16145 = null;
var G__16146 = 0;
var G__16147 = 0;
seq__16122_16127 = G__16144;
chunk__16123_16128 = G__16145;
count__16124_16129 = G__16146;
i__16125_16130 = G__16147;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16152_16156 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16153_16157 = null;var count__16154_16158 = 0;var i__16155_16159 = 0;while(true){
if((i__16155_16159 < count__16154_16158))
{var node_16160 = cljs.core._nth.call(null,chunk__16153_16157,i__16155_16159);goog.dom.setTextContent(node_16160,value);
{
var G__16161 = seq__16152_16156;
var G__16162 = chunk__16153_16157;
var G__16163 = count__16154_16158;
var G__16164 = (i__16155_16159 + 1);
seq__16152_16156 = G__16161;
chunk__16153_16157 = G__16162;
count__16154_16158 = G__16163;
i__16155_16159 = G__16164;
continue;
}
} else
{var temp__4092__auto___16165 = cljs.core.seq.call(null,seq__16152_16156);if(temp__4092__auto___16165)
{var seq__16152_16166__$1 = temp__4092__auto___16165;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16152_16166__$1))
{var c__4148__auto___16167 = cljs.core.chunk_first.call(null,seq__16152_16166__$1);{
var G__16168 = cljs.core.chunk_rest.call(null,seq__16152_16166__$1);
var G__16169 = c__4148__auto___16167;
var G__16170 = cljs.core.count.call(null,c__4148__auto___16167);
var G__16171 = 0;
seq__16152_16156 = G__16168;
chunk__16153_16157 = G__16169;
count__16154_16158 = G__16170;
i__16155_16159 = G__16171;
continue;
}
} else
{var node_16172 = cljs.core.first.call(null,seq__16152_16166__$1);goog.dom.setTextContent(node_16172,value);
{
var G__16173 = cljs.core.next.call(null,seq__16152_16166__$1);
var G__16174 = null;
var G__16175 = 0;
var G__16176 = 0;
seq__16152_16156 = G__16173;
chunk__16153_16157 = G__16174;
count__16154_16158 = G__16175;
i__16155_16159 = G__16176;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16181_16185 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16182_16186 = null;var count__16183_16187 = 0;var i__16184_16188 = 0;while(true){
if((i__16184_16188 < count__16183_16187))
{var node_16189 = cljs.core._nth.call(null,chunk__16182_16186,i__16184_16188);goog.dom.forms.setValue(node_16189,value);
{
var G__16190 = seq__16181_16185;
var G__16191 = chunk__16182_16186;
var G__16192 = count__16183_16187;
var G__16193 = (i__16184_16188 + 1);
seq__16181_16185 = G__16190;
chunk__16182_16186 = G__16191;
count__16183_16187 = G__16192;
i__16184_16188 = G__16193;
continue;
}
} else
{var temp__4092__auto___16194 = cljs.core.seq.call(null,seq__16181_16185);if(temp__4092__auto___16194)
{var seq__16181_16195__$1 = temp__4092__auto___16194;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16181_16195__$1))
{var c__4148__auto___16196 = cljs.core.chunk_first.call(null,seq__16181_16195__$1);{
var G__16197 = cljs.core.chunk_rest.call(null,seq__16181_16195__$1);
var G__16198 = c__4148__auto___16196;
var G__16199 = cljs.core.count.call(null,c__4148__auto___16196);
var G__16200 = 0;
seq__16181_16185 = G__16197;
chunk__16182_16186 = G__16198;
count__16183_16187 = G__16199;
i__16184_16188 = G__16200;
continue;
}
} else
{var node_16201 = cljs.core.first.call(null,seq__16181_16195__$1);goog.dom.forms.setValue(node_16201,value);
{
var G__16202 = cljs.core.next.call(null,seq__16181_16195__$1);
var G__16203 = null;
var G__16204 = 0;
var G__16205 = 0;
seq__16181_16185 = G__16202;
chunk__16182_16186 = G__16203;
count__16183_16187 = G__16204;
i__16184_16188 = G__16205;
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
{var value_16216 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16212_16217 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16213_16218 = null;var count__16214_16219 = 0;var i__16215_16220 = 0;while(true){
if((i__16215_16220 < count__16214_16219))
{var node_16221 = cljs.core._nth.call(null,chunk__16213_16218,i__16215_16220);node_16221.innerHTML = value_16216;
{
var G__16222 = seq__16212_16217;
var G__16223 = chunk__16213_16218;
var G__16224 = count__16214_16219;
var G__16225 = (i__16215_16220 + 1);
seq__16212_16217 = G__16222;
chunk__16213_16218 = G__16223;
count__16214_16219 = G__16224;
i__16215_16220 = G__16225;
continue;
}
} else
{var temp__4092__auto___16226 = cljs.core.seq.call(null,seq__16212_16217);if(temp__4092__auto___16226)
{var seq__16212_16227__$1 = temp__4092__auto___16226;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16212_16227__$1))
{var c__4148__auto___16228 = cljs.core.chunk_first.call(null,seq__16212_16227__$1);{
var G__16229 = cljs.core.chunk_rest.call(null,seq__16212_16227__$1);
var G__16230 = c__4148__auto___16228;
var G__16231 = cljs.core.count.call(null,c__4148__auto___16228);
var G__16232 = 0;
seq__16212_16217 = G__16229;
chunk__16213_16218 = G__16230;
count__16214_16219 = G__16231;
i__16215_16220 = G__16232;
continue;
}
} else
{var node_16233 = cljs.core.first.call(null,seq__16212_16227__$1);node_16233.innerHTML = value_16216;
{
var G__16234 = cljs.core.next.call(null,seq__16212_16227__$1);
var G__16235 = null;
var G__16236 = 0;
var G__16237 = 0;
seq__16212_16217 = G__16234;
chunk__16213_16218 = G__16235;
count__16214_16219 = G__16236;
i__16215_16220 = G__16237;
continue;
}
}
} else
{}
}
break;
}
}catch (e16211){if((e16211 instanceof Error))
{var e_16238 = e16211;domina.replace_children_BANG_.call(null,content,value_16216);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16211;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16245_16249 = cljs.core.seq.call(null,children);var chunk__16246_16250 = null;var count__16247_16251 = 0;var i__16248_16252 = 0;while(true){
if((i__16248_16252 < count__16247_16251))
{var child_16253 = cljs.core._nth.call(null,chunk__16246_16250,i__16248_16252);frag.appendChild(child_16253);
{
var G__16254 = seq__16245_16249;
var G__16255 = chunk__16246_16250;
var G__16256 = count__16247_16251;
var G__16257 = (i__16248_16252 + 1);
seq__16245_16249 = G__16254;
chunk__16246_16250 = G__16255;
count__16247_16251 = G__16256;
i__16248_16252 = G__16257;
continue;
}
} else
{var temp__4092__auto___16258 = cljs.core.seq.call(null,seq__16245_16249);if(temp__4092__auto___16258)
{var seq__16245_16259__$1 = temp__4092__auto___16258;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16245_16259__$1))
{var c__4148__auto___16260 = cljs.core.chunk_first.call(null,seq__16245_16259__$1);{
var G__16261 = cljs.core.chunk_rest.call(null,seq__16245_16259__$1);
var G__16262 = c__4148__auto___16260;
var G__16263 = cljs.core.count.call(null,c__4148__auto___16260);
var G__16264 = 0;
seq__16245_16249 = G__16261;
chunk__16246_16250 = G__16262;
count__16247_16251 = G__16263;
i__16248_16252 = G__16264;
continue;
}
} else
{var child_16265 = cljs.core.first.call(null,seq__16245_16259__$1);frag.appendChild(child_16265);
{
var G__16266 = cljs.core.next.call(null,seq__16245_16259__$1);
var G__16267 = null;
var G__16268 = 0;
var G__16269 = 0;
seq__16245_16249 = G__16266;
chunk__16246_16250 = G__16267;
count__16247_16251 = G__16268;
i__16248_16252 = G__16269;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16239_SHARP_,p2__16240_SHARP_){return f.call(null,p1__16239_SHARP_,p2__16240_SHARP_);
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
{if((function (){var G__16271 = list_thing;if(G__16271)
{var bit__4050__auto__ = (G__16271.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16271.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16271.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16271);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16271);
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
{if((function (){var G__16272 = content;if(G__16272)
{var bit__4050__auto__ = (G__16272.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16272.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16272.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16272);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16272);
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
{if((function (){var G__16273 = content;if(G__16273)
{var bit__4050__auto__ = (G__16273.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16273.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16273.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16273);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16273);
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